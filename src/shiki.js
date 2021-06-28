const shiki = require('shiki');
const fs = require('fs');

const arguments = process.argv.slice(2);

const customLanguages = [
    {
        id: 'blade',
        scopeName: 'text.html.php.blade',
        path: '/../../../languages/blade.tmLanguage.json',
    },
    {
        id: 'antlers',
        scopeName: 'text.html.statamic',
        path: '/../../../languages/antlers.tmLanguage.json',
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
let theme = arguments[2] || 'nord';

if (fs.existsSync(theme)) {
    theme = JSON.parse(fs.readFileSync(theme, 'utf-8'));
}

shiki.getHighlighter({
    theme,
    langs: languages,
}).then((highlighter) => {
    process.stdout.write(highlighter.codeToHtml(arguments[0], language));
});
