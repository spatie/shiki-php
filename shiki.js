import { getHighlighter, BUNDLED_THEMES, BUNDLED_LANGUAGES } from 'shiki';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const blade = {
    id: 'blade',
    scopeName: 'text.html.php.blade',
    path: 'blade.tmLanguage.json' // or `plist`
};

(() => {
    if (argv._[0] === 'languages') {
        const languages = BUNDLED_LANGUAGES;
        languages.push(blade);
        process.stdout.write(JSON.stringify(languages));
        return;
    }

    if (argv._[0] === 'themes') {
        process.stdout.write(JSON.stringify(BUNDLED_THEMES));
        return;
    }

    let language = argv.lang;
    if (! language) {
        language = 'php';
    }

    let theme = argv.theme;
    if (! theme) {
        theme = 'nord';
    }

    getHighlighter({
        theme,
        paths: {
            themes: 'dist/themes/',
            languages: 'dist/languages/'
        }
    }).then((highlighter) => {
            highlighter.loadLanguage(blade).then(() => {
                process.stdout.write(highlighter.codeToHtml(argv._[0], language));
            })
        });
})();
