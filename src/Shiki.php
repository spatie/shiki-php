<?php

namespace Spatie\ShikiPhp;

use Exception;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\ExecutableFinder;
use Symfony\Component\Process\Process;

class Shiki
{
    public static function highlight(
        string $code,
        string $language = 'php',
        string $theme = 'nord',
        array $highlightLines = [],
        array $addLines = [],
        array $deleteLines = [],
        array $focusLines = [],
        ?string $host = null,
        ?string $port = null,
    ): string {
        return (new static(
            host: $host,
            port: $port,
        ))->highlightCode($code, $language, $theme, [
            'highlightLines' => $highlightLines,
            'addLines' => $addLines,
            'deleteLines' => $deleteLines,
            'focusLines' => $focusLines,
        ]);
    }

    public function getAvailableLanguages(): array
    {
        $shikiResult = $this->callShiki('languages');

        $languageProperties = json_decode($shikiResult, true);

        $languages = array_map(
            fn ($properties) => $properties['id'],
            $languageProperties
        );

        sort($languages);

        return $languages;
    }

    public function __construct(
        protected string $defaultTheme = 'nord',
        protected ?string $host = null,
        protected ?string $port = null,
    ) {
    }

    public function getAvailableThemes(): array
    {
        $shikiResult = $this->callShiki('themes');

        return json_decode($shikiResult, true);
    }

    public function languageIsAvailable(string $language): bool
    {
        return in_array($language, $this->getAvailableLanguages());
    }

    public function themeIsAvailable(string $theme): bool
    {
        return in_array($theme, $this->getAvailableThemes());
    }

    public function highlightCode(string $code, string $language, ?string $theme = null, ?array $options = []): string
    {
        $theme = $theme ?? $this->defaultTheme;

        return $this->callShiki($code, $language, $theme, $options);
    }

    protected function callShiki(...$arguments): string
    {
        if ($this->host && $this->port) {
            return $this->callShikiServer($arguments);
        }

        $command = [
            (new ExecutableFinder())->find('node', 'node'),
            'shiki.js',
            json_encode(array_values($arguments)),
        ];

        $process = new Process(
            command: $command,
            cwd: realpath(__DIR__ . '/../bin'),
            timeout: null,
        );

        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return $process->getOutput();
    }

    protected function callShikiServer(array $arguments): mixed
    {
        $highlighting = ! in_array($arguments[0], ['languages', 'themes']);

        $ch = curl_init("{$this->host}:{$this->port}");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
            'command' => $highlighting
                ? 'highlight'
                : $arguments[0],
            'code' => $arguments[0] ?? null,
            'language' => $arguments[1] ?? null,
            'theme' => $arguments[2] ?? null,
            'options' => $arguments[3] ?? null,
        ]));
        $data = curl_exec($ch);
        curl_close($ch);

        if ($data === false) {
            throw new Exception("Shiki server is not running.");
        }

        if ($highlighting) {
            return json_decode($data, true)['html'];
        }

        return $data;
    }
}
