# Changelog

All notable changes to `shiki-php` will be documented in this file.

## 2.0.0 - 2024-02-19

### Upgrading

- The `getAvailableLanguages`, `getAvailableThemes`, `languageIsAvailable` and `themeIsAvailable` methods have been removed. These are no longer necessary as Shiki 1.0 lazy loads these when necessary.

#### What's Changed

* feat: upgrade support to shiki v1 by @heywhy in https://github.com/spatie/shiki-php/pull/21
* Close code block by @mxsgx in https://github.com/spatie/shiki-php/pull/15
* Update README.md by @joshbruce in https://github.com/spatie/shiki-php/pull/17
* Fix badges by @erikn69 in https://github.com/spatie/shiki-php/pull/18
* feat: support tj/n by @axelrindle in https://github.com/spatie/shiki-php/pull/20

#### New Contributors

* @mxsgx made their first contribution in https://github.com/spatie/shiki-php/pull/15
* @joshbruce made their first contribution in https://github.com/spatie/shiki-php/pull/17
* @erikn69 made their first contribution in https://github.com/spatie/shiki-php/pull/18
* @axelrindle made their first contribution in https://github.com/spatie/shiki-php/pull/20
* @heywhy made their first contribution in https://github.com/spatie/shiki-php/pull/21

**Full Changelog**: https://github.com/spatie/shiki-php/compare/1.3.0...2.0.0

## 1.3.0 - 2022-06-01

### What's Changed

- Allow php7.4 by @jonassiewertsen in https://github.com/spatie/shiki-php/pull/14

### New Contributors

- @jonassiewertsen made their first contribution in https://github.com/spatie/shiki-php/pull/14

**Full Changelog**: https://github.com/spatie/shiki-php/compare/1.2.0...1.3.0

## 1.2.0 - 2022-02-24

## What's Changed

- Add information to README.md about using NVM by @Drewdan in https://github.com/spatie/shiki-php/pull/10
- Update antlers.tmLanguage.json by @JohnathonKoster in https://github.com/spatie/shiki-php/pull/13
- Allow for user customizable renderer scripts by @mallardduck in https://github.com/spatie/shiki-php/pull/9

## New Contributors

- @Drewdan made their first contribution in https://github.com/spatie/shiki-php/pull/10
- @JohnathonKoster made their first contribution in https://github.com/spatie/shiki-php/pull/13
- @mallardduck made their first contribution in https://github.com/spatie/shiki-php/pull/9

**Full Changelog**: https://github.com/spatie/shiki-php/compare/1.1.7...1.2.0

## 1.1.7 - 2021-07-22

- fix Node path

## 1.1.6 - 2021-07-22

- add common locations to look for node

## 1.1.5 - 2021-07-12

- Update Antlers syntax highlighting

## 1.1.4 - 2021-07-12

- Fix compatibility on lower versions of Node

## 1.1.3 - 2021-07-11

- Fix an issue where embedded languages weren't being highlighted correctly

## 1.1.2 - 2021-07-11

- Fix an issue where focus was applied to the Shiki div when not needed

## 1.1.1 - 2021-07-10

- Fix an issue when passing lines to be highlighted

## 1.1.0 - 2021-07-10

- You can now mark lines as `highlighted`, `added`, `deleted` or `focus`

## 1.0.2 - 2021-07-09

- significantly improve speed

## 1.0.1 - 2021-07-09

- use default executable name

## 1.0.0 - 2021-07-09

- initial release
