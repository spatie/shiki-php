const fs = require("fs");
const path = require("path");
const renderer = require("./renderer");
const args = JSON.parse(process.argv.slice(2));

const customLanguages = {
    antlers: {
        scopeName: "text.html.statamic",
        embeddedLangs: ["html"],
    },
};

async function main(args) {
    const shiki = await import("shiki");
    const highlighter = await shiki.createHighlighter({});

    for (const [lang, spec] of Object.entries(customLanguages)) {
        for (const embedded of spec.embeddedLangs) {
            await highlighter.loadLanguage(embedded);
        }

        await highlighter.loadLanguage({
            ...spec,
            ...loadLanguage(lang),
            name: lang,
        });
    }

    const language = args[1] || "php";

    /**
     * If only one theme is provided, the variable `theme` will be a string. The variable `themes` will be null.
     *
     * If multiple themes are provided, the variable `themes` will be an array and the variable `theme` will be null.
     */
    let theme = args[2] || "nord";
    let themes = null;
    if (typeof args[2] === "object") {
        theme = null;
        themes = args[2];
    }

    if (theme) {
        if (fs.existsSync(theme)) {
            theme = loadLocalTheme(theme);
        } else {
            await highlighter.loadTheme(theme);
        }
    } else if (themes) {
        for (const theme of Object.values(themes)) {
            if (fs.existsSync(theme)) {
                themes[theme] = loadLocalTheme(theme);
            } else {
                await highlighter.loadTheme(theme);
            }
        }
    }

    if (!customLanguages[language]) await highlighter.loadLanguage(language);

    if (args[0] === "languages") {
        process.stdout.write(
            JSON.stringify([
                ...Object.keys(shiki.bundledLanguagesBase),
                ...Object.keys(customLanguages),
            ])
        );
        return;
    }

    if (args[0] === "aliases") {
        process.stdout.write(
            JSON.stringify([
                ...Object.keys(shiki.bundledLanguages),
                ...Object.keys(customLanguages),
            ])
        );
        return;
    }

    if (args[0] === "themes") {
        process.stdout.write(JSON.stringify(Object.keys(shiki.bundledThemes)));
        return;
    }

    const codeToTokensOptions = {
        lang: language,
    };

    if (theme) {
        codeToTokensOptions.theme = theme;
    } else if (themes) {
        codeToTokensOptions.themes = themes;
    }

    const result = highlighter.codeToTokens(args[0], codeToTokensOptions);

    const options = args[3] || {};

    const renderToHtmlOptions = {
        highlightLines: options.highlightLines,
        addLines: options.addLines,
        deleteLines: options.deleteLines,
        focusLines: options.focusLines,
    };

    if (theme) {
        renderToHtmlOptions.theme = highlighter.setTheme(theme);
    } else if (themes) {
        const themes$ = {};

        for (const [theme, theme$] of Object.entries(themes)) {
            themes$[theme] = highlighter.setTheme(theme$);
        }

        renderToHtmlOptions.themes = themes$;
    }

    const rendered = renderer.renderToHtml(result.tokens, renderToHtmlOptions);

    process.stdout.write(rendered);
}

main(args);

function loadLanguage(language) {
    const path = getLanguagePath(language);
    const content = fs.readFileSync(path);

    return JSON.parse(content);
}

function getLanguagePath(language) {
    const url = path.join(
        __dirname,
        "..",
        "languages",
        `${language}.tmLanguage.json`
    );

    return path.normalize(url);
}

function loadLocalTheme(theme) {
    return JSON.parse(fs.readFileSync(theme, "utf-8"));
}
