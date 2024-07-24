const fs = require('fs');
const path = require('path');
const renderer = require('./renderer');
const args = JSON.parse(process.argv.slice(2));

const customLanguages = {
    antlers: {
        scopeName: 'text.html.statamic',
        embeddedLangs: ['html'],
    },
    blade: {
        scopeName: 'text.html.php.blade',
        embeddedLangs: ['html', 'php'],
    },
};

async function main(args) {
    const shiki = await import('shiki');
    const highlighter = await shiki.getHighlighter({});

    for (const [lang, spec] of Object.entries(customLanguages)) {
        for (const embedded of spec.embeddedLangs) {
            await highlighter.loadLanguage(embedded);
        }

        await highlighter.loadLanguage({ ...spec, ...loadLanguage(lang), name: lang });
    }

    const language = args[1] || 'php';
    let theme = args[2] || 'nord';

    if (fs.existsSync(theme)) {
        theme = JSON.parse(fs.readFileSync(theme, 'utf-8'));
    } else {
        await highlighter.loadTheme(theme);
    }

    if (!customLanguages[language]) await highlighter.loadLanguage(language);

    if (args[0] === 'languages') {
        process.stdout.write(
            JSON.stringify([
                ...Object.keys(shiki.bundledLanguagesBase),
                ...Object.keys(customLanguages),
            ])
        );
        return;
    }

    if (args[0] === 'aliases') {
        process.stdout.write(
            JSON.stringify([
                ...Object.keys(shiki.bundledLanguages),
                ...Object.keys(customLanguages),
            ])
        );
        return;
    }

    if (args[0] === 'themes') {
        process.stdout.write(JSON.stringify(Object.keys(shiki.bundledThemes)));
        return;
    }

    const { theme: theme$ } = highlighter.setTheme(theme)

    const result = highlighter.codeToTokens(args[0], {
        theme: theme$,
        lang: language,
    });

    const options = args[3] || {};

    const rendered = renderer.renderToHtml(result.tokens, {
        fg: theme$.fg,
        bg: theme$.bg,
        highlightLines: options.highlightLines,
        addLines: options.addLines,
        deleteLines: options.deleteLines,
        focusLines: options.focusLines,
    });

    process.stdout.write(rendered);
}

main(args)

function loadLanguage(language) {
    const path = getLanguagePath(language);
    const content = fs.readFileSync(path);

    return JSON.parse(content);
}

function getLanguagePath(language) {
    const url = path.join(__dirname, '..', 'languages', `${language}.tmLanguage.json`);

    return path.normalize(url);
}
