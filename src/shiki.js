const shiki = require('shiki');

const arguments = process.argv.slice(2);

const customLanguages = [
    {
        id: 'blade',
        scopeName: 'text.html.php.blade',
        path: '/../../../custom-languages/blade.tmLanguage.json',
    },
    {
        id: 'antlers',
        scopeName: 'text.html.statamic',
        path: '/../../../custom-languages/antlers.tmLanguage.json',
    }
];

const languages = shiki.BUNDLED_LANGUAGES;
languages.push(...customLanguages);

if (arguments[0] === 'languages') {
    process.stdout.write(JSON.stringify(languages));
    return;
}

if (arguments[0] === 'themes') {
    process.stdout.write(JSON.stringify(shiki.BUNDLED_THEMES));
    return;
}

const language = arguments[1] || 'php';
const theme =arguments[2] || 'nord';

shiki.getHighlighter({
    theme,
    langs: languages,
}).then((highlighter) => {
    process.stdout.write(highlighter.codeToHtml(arguments[0], language));
});
