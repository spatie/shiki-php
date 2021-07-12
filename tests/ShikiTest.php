<?php

use Spatie\ShikiPhp\Shiki;
use Symfony\Component\Process\ExecutableFinder;
use function Spatie\Snapshots\assertMatchesSnapshot;

beforeAll(function () {
    $process = new Symfony\Component\Process\Process(
        command: [
        (new ExecutableFinder())->find('node', 'node'),
        'shiki-server.js',
        "--port=4321",
    ],
        cwd: realpath(__DIR__ . '/../bin'),
        timeout: null,
    );
    $process->start();

    while (@file_get_contents("http://127.0.0.1:4321") == false && $process->getStatus() === 'started') {
        usleep(100);
    }
});

dataset('shiki', function () {
    yield 'shiki' => new Shiki();
    yield 'shiki-server' => new Shiki(
        host: '127.0.0.1',
        port: 4321,
    );
});

test('it can highlight php', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, 'php');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can highlight blade', function (Shiki $shiki) {
    $code = '@if(true) {{ "Hello world" }} @endif';

    $highlightedCode = $shiki->highlightCode($code, language: 'blade');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can highlight blade with html inside', function (Shiki $shiki) {
    $code = <<<blade
    @if(\$foo)
        <p>{{ "Hello world" }}</p>
    @endif
    blade;

    $highlightedCode = $shiki->highlightCode($code, language: 'blade', theme: 'github-light');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can highlight antlers', function (Shiki $shiki) {
    $code = '{{ if }} Hi there {{ /if }}';

    $highlightedCode = $shiki->highlightCode($code, language: 'antlers');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can render for a specific language', function (Shiki $shiki) {
    $code = 'console.log("Hello world")';

    $highlightedCode = $shiki->highlightCode($code, 'js');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can mark lines as highlighted', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, language: 'php', options: ['highlightLines' => [1]]);

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can mark multiple lines as highlighted', function (Shiki $shiki) {
    $code = "
        <?php\n
        echo 'Hello World';\n
        return null;
    ";

    $highlightedCode = $shiki->highlightCode($code, language: 'php', options: ['highlightLines' => ['1', '2-4']]);

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can mark lines as added', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, 'php', options: ['addLines' => [1]]);

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can mark lines as deleted', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, 'php', options: ['deleteLines' => [1]]);

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can mark lines as focus', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, 'php', options: ['focusLines' => [1]]);

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can receive a custom theme', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode(
        $code,
        'php',
        theme: __DIR__ . '/testfiles/ayu-light.json'
    );

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it can accept different themes', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $highlightedCode = $shiki->highlightCode($code, 'php', theme: 'github-light');

    assertMatchesSnapshot($highlightedCode);
})->with('shiki');

test('it throws on invalid theme', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $shiki->highlightCode($code, 'php', theme: 'invalid-theme');
})->with('shiki')->throws(Exception::class);

test('it throws on invalid language', function (Shiki $shiki) {
    $code = '<?php echo "Hello World"; ?>';

    $shiki->highlightCode($code, language: 'invalid-language');
})->with('shiki')->throws(Exception::class);

test('it can get all available themes', function (Shiki $shiki) {
    $availableThemes = $shiki->getAvailableThemes();

    expect($availableThemes)->not()->toBeEmpty();
})->with('shiki');

test('it can get all available languages', function (Shiki $shiki) {
    $availableLanguages = $shiki->getAvailableLanguages();

    expect($availableLanguages)->not()->toBeEmpty();
})->with('shiki');

test('it can determine that a theme is available', function (Shiki $shiki) {
    expect($shiki->themeIsAvailable('nord'))->toBeTrue();
    expect($shiki->themeIsAvailable('non-existing-theme'))->toBeFalse();
})->with('shiki');

test('it can determine that a language is available', function (Shiki $shiki) {
    expect($shiki->languageIsAvailable('php'))->toBeTrue();
    expect($shiki->languageIsAvailable('non-existing-language'))->toBeFalse();
})->with('shiki');

test('it throws when no server is available', function () {
    $shiki = new Shiki(
        host: 'doesnt-exist',
        port: 1234,
    );

    $code = '<?php echo "Hello World"; ?>';

    $shiki->highlightCode($code, language: 'invalid-language');
})->throws(Exception::class);
