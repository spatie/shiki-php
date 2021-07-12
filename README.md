# Code highlighting with Shiki in PHP

[![Latest Version on Packagist](https://img.shields.io/packagist/v/spatie/shiki-php.svg?style=flat-square)](https://packagist.org/packages/spatie/shiki-php)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/spatie/shiki-php/Tests)](https://github.com/spatie/shiki-php/actions?query=workflow%3ATests+branch%3Amaster)
[![GitHub Code Style Action Status](https://img.shields.io/github/workflow/status/spatie/shiki-php/Check%20&%20fix%20styling?label=code%20style)](https://github.com/spatie/shiki-php/actions?query=workflow%3A"Check+%26+fix+styling"+branch%3Amaster)
[![Total Downloads](https://img.shields.io/packagist/dt/spatie/shiki-php.svg?style=flat-square)](https://packagist.org/packages/spatie/shiki-php)

[Shiki](https://github.com/shikijs/shiki) is a beautiful syntax highlighter powered by the same language engine that many code editors use. This package allows you to use Shiki from PHP.

```php
\Spatie\ShikiPhp\Shiki::highlight(
    code: '<?php echo "Hello World"; ?>',
    language: 'php',
    theme: 'github-light',
);
```

This package also ships with the following extra languages, on top of the [100+ that Shiki supports](https://github.com/shikijs/shiki/tree/master/docs/languages.md) out of the box: 

- Antlers
- Blade

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/shiki-php.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/shiki-php)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

You can install the package via composer:

```bash
composer require spatie/shiki-php
```

In your project, you should have the JavaScript package [`shiki`](https://github.com/shikijs/shiki) installed. You can install it via npm...

```bash
npm install shiki
```

... or Yarn.

```bash
yarn add shiki
```

Make sure you have installed Node 10 or higher.

## Usage

Here's an example where we are going to highlight some PHP code.

```php
use Spatie\ShikiPhp\Shiki;

Shiki::highlight(
    code: '<?php echo "Hello World"; ?>',
    language: 'php',
    theme: 'github-light',
);
```

The output is this chunk of HTML which will render beautifully in the browser:

```php
<pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">&lt;?</span><span style="color: #D8DEE9FF">php </span><span style="color: #81A1C1">echo</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">Hello World</span><span style="color: #ECEFF4">&quot;</span><span style="color: #81A1C1">;</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">?&gt;</span></span></code></pre>
```

## Marking lines as highlighted, added, deleted or focus

Shiki-php allows you to mark certain lines as `highlighted`, `added`, `deleted` and `focus`. To do this, you can pass in the necessary lines to the `highlight` method:

```php
use Spatie\ShikiPhp\Shiki;

// Highlighting lines 1 and 4,5,6
Shiki::highlight(
    code: $code,
    language: 'php',
    highlightLines: [1, '4-6'],
);

// Marking line 1 as added
Shiki::highlight(
    code: $code,
    language: 'php',
    addLines: [1],
);

// Marking line 1 as deleted
Shiki::highlight(
    code: $code,
    language: 'php',
    deleteLines: [1],
);

// Marking line 1 as focus
Shiki::highlight(
    code: $code,
    language: 'php',
    focusLines: [1],
);
```

You can then target these classes in your own CSS to color these lines how you want.

## Determining available languages

To get an array with [all languages that Shiki supports](https://github.com/shikijs/shiki/blob/master/docs/languages.md), call `getAvailableLanguages`

```php
$shiki = new \Spatie\ShikiPhp\Shiki();

$shiki->getAvailableLanguages(); // returns an array
$shiki->languageIsAvailable('php'); // returns true
$shiki->languageIsAvailable('non-existing-language'); // returns false
```

## Determining available themes

To get an array with [all themes that Shiki supports](https://github.com/shikijs/shiki/blob/master/docs/themes.md), call `getAvailableThemes`

```php
$shiki = new \Spatie\ShikiPhp\Shiki();

$shiki->getAvailableThemes(); // returns an array
$shiki->themeIsAvailable('github-light'); // returns true
$shiki->themeIsAvailable('non-existing-theme'); // returns false
```

### Using a custom theme

Shiki [supports](https://github.com/shikijs/shiki/blob/master/docs/themes.md) any [VSCode themes](https://code.visualstudio.com/docs/getstarted/themes).

You can load a theme simply by passing an absolute path as the theme parameter.

```php
use Spatie\ShikiPhp\Shiki;

Shiki::highlight(
    code: '<?php echo "Hello World"; ?>',
    language: 'php',
    theme: __DIR__ . '/your-path-to/themes/some-theme.json',
);
```

## Testing

You can run all the tests with this command:

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Rias Van der Veken](https://github.com/riasvdv)
- [Freek Van der Herten](https://github.com/freekmurze)
- [All Contributors](../../contributors)

The Blade syntax highlighting source is taken from [this repo](https://github.com/onecentlin/laravel-blade-snippets-vscode/blob/master/syntaxes/blade.tmLanguage.json).

## Alternatives

If you don't want to install and handle Shiki yourself, take a look at [Torchlight](https://torchlight.dev), which can highlight your code with minimal setup.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
