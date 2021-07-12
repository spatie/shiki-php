const path = require('path');
const shiki = require('shiki');

function getLanguagePath(language)
{
    const pathToShikiDistDirectory = path.dirname(require.resolve('shiki'));
    const pathToShikiLanguages = path.resolve(`${pathToShikiDistDirectory}/../languages`);
    const relativeDirectory = path.relative(pathToShikiLanguages, `${__dirname}/../languages`);

    return `${relativeDirectory}/${language}.tmLanguage.json`;
}

function getThemePath(theme)
{
    const pathToShikiDistDirectory = path.dirname(require.resolve('shiki'));
    const pathToShikiThemes = path.resolve(`${pathToShikiDistDirectory}/../themes`);
    const relativeThemePath = path.relative(pathToShikiThemes, theme);

    return relativeThemePath.replace('.json', '');
}

function getAllLanguages()
{
    const customLanguages = [
        {
            id: 'antlers',
            scopeName: 'text.html.statamic',
            path: getLanguagePath('antlers'),
            embeddedLangs: ['html'],
        },
        {
            id: 'blade',
            scopeName: 'text.html.php.blade',
            path: getLanguagePath('blade'),
            embeddedLangs: ['html', 'php'],
        },
    ];

    let allLanguages = shiki.BUNDLED_LANGUAGES;
    allLanguages.push(...customLanguages);

    return allLanguages;
}

exports.getLanguagePath = getLanguagePath;
exports.getAllLanguages = getAllLanguages;
exports.getThemePath = getThemePath;
