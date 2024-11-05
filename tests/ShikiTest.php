<?php

use Spatie\ShikiPhp\Shiki;

use function Spatie\Snapshots\assertMatchesSnapshot;

beforeAll(fn() => Shiki::setCustomWorkingDirPath(null));

it('can get the default workingDirPath', function () {
    expect((new Shiki())->getWorkingDirPath())
        ->toBeString()->toBe(dirname(__DIR__) . '/bin');
});

it('can accept a single theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlighter = new Shiki('github-light');

    $highlightedCode = $highlighter->highlightCode($code, 'php');

    assertMatchesSnapshot($highlightedCode);
});

it('can accept a light and a dark theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlighter = new Shiki([
        'light' => 'github-light',
        'dark' => 'github-dark',
    ]);

    $highlightedCode = $highlighter->highlightCode($code, 'php');

    assertMatchesSnapshot($highlightedCode);
});

it('can highlight php', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code);

    assertMatchesSnapshot($highlightedCode);
});

it('can highlight blade', function () {
    $code = '@if(true) {{ "Hello world" }} @endif';

    $highlightedCode = Shiki::highlight($code, 'blade');

    assertMatchesSnapshot($highlightedCode);
});

it('can highlight complex blade with html inside', function () {
    $code = <<<blade
    @if(\$foo)
        <p>{{ "Hello world" }}</p>
    @endif
    blade;

    $highlightedCode = Shiki::highlight($code, 'blade', 'github-light');

    assertMatchesSnapshot($highlightedCode);
});

it('can highlight antlers', function () {
    $code = '{{ if }} Hi there {{ /if }}';

    $highlightedCode = Shiki::highlight($code, 'antlers');

    assertMatchesSnapshot($highlightedCode);
});

it('can render for a specific language', function () {
    $code = 'console.log("Hello world")';

    $highlightedCode = Shiki::highlight($code, 'js');

    assertMatchesSnapshot($highlightedCode);
});

it('can mark lines as highlighted', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, null, null, [1]);

    assertMatchesSnapshot($highlightedCode);
});

it('can mark multiple lines as highlighted', function () {
    $code = "
        <?php\n
        echo 'Hello World';\n
        return null;
    ";

    $highlightedCode = Shiki::highlight($code, null, null, ['1', '2-4']);

    assertMatchesSnapshot($highlightedCode);
});

it('can mark lines as added', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, null, null, null, [1]);

    assertMatchesSnapshot($highlightedCode);
});

it('can mark lines as deleted', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, 'php', null, null, null, [1]);

    assertMatchesSnapshot($highlightedCode);
});

it('can mark lines as focus', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, 'php', null, null, null, null, [1]);

    assertMatchesSnapshot($highlightedCode);
});

it('can receive a custom theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, null, __DIR__ . '/testfiles/ayu-light.json');

    assertMatchesSnapshot($highlightedCode);
});

it('can accept different themes', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, null, 'github-light');

    assertMatchesSnapshot($highlightedCode);
});

it('can receive a light and a dark theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = Shiki::highlight($code, null, [
        'light' => 'github-light',
        'dark' => 'github-dark',
    ]);

    assertMatchesSnapshot($highlightedCode);
});

it('throws on invalid theme', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::highlight($code, 'php', 'invalid-theme');
})->throws(Exception::class);

it('throws on invalid language', function () {
    $code = '<?php echo "Hello World"; ?>';

    Shiki::highlight($code, 'invalid-language');
})->throws(Exception::class);

it('can get all available themes', function () {
    $availableThemes = (new Shiki())->getAvailableThemes();

    expect($availableThemes)->not()->toBeEmpty();
});

it('can get all available languages', function () {
    $availableLanguages = (new Shiki())->getAvailableLanguages();

    expect($availableLanguages)->not()->toBeEmpty();
    expect($availableLanguages)->toContain('javascript');
    // should not include aliases
    expect($availableLanguages)->not()->toContain('js');
});

it('can determine that a theme is available', function () {
    $shiki = (new Shiki());

    expect($shiki->themeIsAvailable('nord'))->toBeTrue();
    expect($shiki->themeIsAvailable('non-existing-theme'))->toBeFalse();
});

it('can determine that a language is available', function () {
    $shiki = (new Shiki());

    expect($shiki->languageIsAvailable('php'))->toBeTrue();
    expect($shiki->languageIsAvailable('non-existing-language'))->toBeFalse();
    expect($shiki->languageIsAvailable('javascript'))->toBeTrue();
    // should match aliases
    expect($shiki->languageIsAvailable('js'))->toBeTrue();
});
