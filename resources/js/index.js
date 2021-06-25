import 'shiki/dist/index.iife';
import 'onigasm';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const customLanguages = [{
    id: 'blade',
    scopeName: 'text.html.php.blade',
    path: 'blade.tmLanguage.json',
}];

const languages = shiki.BUNDLED_LANGUAGES;
languages.push(...customLanguages);

(() => {
    if (argv._[0] === 'languages') {
        process.stdout.write(JSON.stringify(languages));
        return;
    }

    if (argv._[0] === 'themes') {
        process.stdout.write(JSON.stringify(shiki.BUNDLED_THEMES));
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

    shiki.getHighlighter({
        theme,
        paths: {
            themes: 'dist/themes/',
            languages: 'dist/languages/'
        },
        langs: languages,
    }).then((highlighter) => {
        process.stdout.write(highlighter.codeToHtml(argv._[0], language));
    });
})();
