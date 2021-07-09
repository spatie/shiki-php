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
        string $theme = 'nord'
    ): string {
        return (new static())->highlightCode($code, $language, $theme);
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

    public function highlightCode(string $code, string $language, ?string $theme = null): string
    {
        $theme = $theme ?? $this->defaultTheme;

        return $this->callShiki($code, $language, $theme);
    }

    protected function callShiki(...$arguments): string
    {
        $command = [
            (new ExecutableFinder)->find('node', 'node'),
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
