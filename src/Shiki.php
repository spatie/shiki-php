<?php

namespace Spatie\ShikiPhp;

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
    ): string {
        return (new static())->highlightCode($code, $language, $theme, [
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
        protected string $defaultTheme = 'nord'
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
        $command = [
            (new ExecutableFinder)->find('node', 'node', [
                '/usr/local/bin',
                '/opt/homebrew/bin/node',
            ]),
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
}
