<?php

use Spatie\ShikiPhp\Shiki;
use function Spatie\Snapshots\assertMatchesSnapshot;

test('it can render html', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::codeToHtml($code);

    assertMatchesSnapshot($highlightedCode);
});

test('it can highlight blade', function () {
    $code = '@if(true) {{ "Hello world" }} @endif';

    $highlightedCode = Shiki::codeToHtml($code, language: 'blade');

    assertMatchesSnapshot($highlightedCode);
});

test('it can highlight antlers', function () {
    $code = '{{ if }} Hi there {{ /if }}';

    $highlightedCode = Shiki::codeToHtml($code, language: 'antlers');

    assertMatchesSnapshot($highlightedCode);
});

test('it can render for a specific language', function () {
    $code = 'console.log("Hello world")';

    $highlightedCode = Shiki::codeToHtml($code, 'js');

    assertMatchesSnapshot($highlightedCode);
});

test('it can receive a custom theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::codeToHtml(
        $code,
        theme: __DIR__ . '/testfiles/ayu-light.json'
    );

    assertMatchesSnapshot($highlightedCode);
});

test('it can accept different themes', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::codeToHtml($code, theme: 'github-light');

    assertMatchesSnapshot($highlightedCode);
});

test('it throws on invalid theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::codeToHtml($code, theme: 'invalid-theme');
})->throws(Exception::class, "Invalid theme `invalid-theme`");

test('it throws on invalid language', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::codeToHtml($code, language: 'invalid-language');
})->throws(Exception::class, "Invalid language `invalid-language`");

test('it can get available languages', function () {
    $languages = Shiki::languages();

    expect($languages->count())->toBeGreaterThan(0);
});

test('it can get available themes', function () {
    $themes = Shiki::themes();

    expect($themes->count())->toBeGreaterThan(0);
});
