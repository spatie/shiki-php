<?php

use Spatie\ShikiPhp\Shiki;
use function Spatie\Snapshots\assertMatchesSnapshot;

test('it can highlight php', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code);

    assertMatchesSnapshot($highlightedCode);
});

test('it can highlight blade', function () {
    $code = '@if(true) {{ "Hello world" }} @endif';

    $highlightedCode = Shiki::highlight($code, language: 'blade');

    assertMatchesSnapshot($highlightedCode);
});

test('it can highlight antlers', function () {
    $code = '{{ if }} Hi there {{ /if }}';

    $highlightedCode = Shiki::highlight($code, language: 'antlers');

    assertMatchesSnapshot($highlightedCode);
});

test('it can render for a specific language', function () {
    $code = 'console.log("Hello world")';

    $highlightedCode = Shiki::highlight($code, 'js');

    assertMatchesSnapshot($highlightedCode);
});

test('it can mark lines as highlighted', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, highlightLines: [1]);

    assertMatchesSnapshot($highlightedCode);
});

test('it can mark multiple lines as highlighted', function () {
    $code = "
        <?php\n
        echo 'Hello World';\n
        return null;
    ";

    $highlightedCode = Shiki::highlight($code, highlightLines: ['2-4']);

    assertMatchesSnapshot($highlightedCode);
});

test('it can mark lines as added', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, addLines: [1]);

    assertMatchesSnapshot($highlightedCode);
});

test('it can mark lines as deleted', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, deleteLines: [1]);

    assertMatchesSnapshot($highlightedCode);
});

test('it can mark lines as focus', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, focusLines: [1]);

    assertMatchesSnapshot($highlightedCode);
});

test('it can receive a custom theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight(
        $code,
        theme: __DIR__ . '/testfiles/ayu-light.json'
    );

    assertMatchesSnapshot($highlightedCode);
});

test('it can accept different themes', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, theme: 'github-light');

    assertMatchesSnapshot($highlightedCode);
});

test('it throws on invalid theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::highlight($code, theme: 'invalid-theme');
})->throws(Exception::class);

test('it throws on invalid language', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::highlight($code, language: 'invalid-language');
})->throws(Exception::class);

test('it can get all available themes', function () {
    $availableThemes = (new Shiki())->getAvailableThemes();

    expect($availableThemes)->not()->toBeEmpty();
});

test('it can get all available languages', function () {
    $availableLanguages = (new Shiki())->getAvailableLanguages();

    expect($availableLanguages)->not()->toBeEmpty();
});

test('it can determine that a theme is available', function () {
    $shiki = (new Shiki());

    expect($shiki->themeIsAvailable('nord'))->toBeTrue();
    expect($shiki->themeIsAvailable('non-existing-theme'))->toBeFalse();
});

test('it can determine that a language is available', function () {
    $shiki = (new Shiki());

    expect($shiki->languageIsAvailable('php'))->toBeTrue();
    expect($shiki->languageIsAvailable('non-existing-language'))->toBeFalse();
});
