# Code highlighting with Shiki in PHP

[![Latest Version on Packagist](https://img.shields.io/packagist/v/spatie/shiki-php.svg?style=flat-square)](https://packagist.org/packages/spatie/shiki-php)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/spatie/shiki-php/run-tests?label=tests)](https://github.com/spatie/shiki-php/actions?query=workflow%3ATests+branch%3Amaster)
[![GitHub Code Style Action Status](https://img.shields.io/github/workflow/status/spatie/shiki-php/Check%20&%20fix%20styling?label=code%20style)](https://github.com/spatie/shiki-php/actions?query=workflow%3A"Check+%26+fix+styling"+branch%3Amaster)
[![Total Downloads](https://img.shields.io/packagist/dt/spatie/shiki-php.svg?style=flat-square)](https://packagist.org/packages/spatie/shiki-php)

[Shiki](https://github.com/shikijs/shiki) is a beautiful syntax highlighter powered by the same language engine that many code editors use. This package allows you to use Shiki from PHP.

```php
\Spatie\ShikiPhp\Shiki::codeToHtml(
    code: '<?php echo "Hello World"; ?>',
    language: 'php',
    theme: 'github-light',
);
```

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/shiki-php.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/shiki-php)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

You can install the package via composer:

```bash
composer require spatie/shiki-php
```

## Usage

```php
\Spatie\ShikiPhp\Shiki::codeToHtml(
    code: '<?php echo "Hello World"; ?>',
    language: 'php',
    theme: 'github-light',
);
```

## Testing

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

- [Rias](https://github.com/riasvdv)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
