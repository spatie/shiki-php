<?php

declare(strict_types=1);

namespace Spatie\ShikiPhp;

use Illuminate\Support\Collection;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Shiki
{
    public static function codeToHtml(string $code, string $language = 'php', string $theme = 'nord'): string
    {
        self::checkTheme($theme);
        self::checkLanguage($language);

        return self::process($code, $language, $theme);
    }

    /**
     * @throws \Exception
     */
    private static function checkTheme(string $theme): void
    {
        if (! self::themes()->contains($theme)) {
            throw new \Exception("Invalid theme `{$theme}`");
        }
    }

    /**
     * @throws \Exception
     */
    private static function checkLanguage(string $language): void
    {
        $languages = self::languages();

        $aliases = $languages->pluck('aliases')->flatten();
        if (! $languages->pluck('id')->merge($aliases)->contains($language)) {
            throw new \Exception("Invalid language `{$language}`");
        }
    }

    /**
     * @throws \Symfony\Component\Process\Exception\ProcessFailedException
     */
    private static function process(string $code, string $language, string $theme): string
    {
        $process = new Process(["node", __DIR__ . '/../dist/shiki.js', $code, "--theme={$theme}", "--lang={$language}"]);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return $process->getOutput();
    }

    /**
     * @throws \Symfony\Component\Process\Exception\ProcessFailedException
     */
    private static function languages(): Collection
    {
        return self::shiki('languages');
    }

    /**
     * @throws \Symfony\Component\Process\Exception\ProcessFailedException
     */
    private static function themes(): Collection
    {
        return self::shiki('themes');
    }

    /**
     * @throws \Symfony\Component\Process\Exception\ProcessFailedException
     */
    private static function shiki(string $value): Collection
    {
        $process = new Process(["node", __DIR__ . '/../dist/shiki.js', $value]);
        $process->run();
        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        $results = json_decode($process->getOutput(), true);

        return collect($results);
    }
}
