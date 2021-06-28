<?php

namespace Spatie\ShikiPhp;

use Exception;
use Illuminate\Support\Collection;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Shiki
{
    public static function codeToHtml(string $code, string $language = 'php', string $theme = 'nord'): string
    {
        self::ensureThemeExists($theme);
        self::ensureLanguageExists($language);

        return self::callShiki($code, $language, $theme);
    }

    public static function languages(): Collection
    {
        return collect(json_decode(self::callShiki('languages'), true));
    }

    public static function themes(): Collection
    {
        return collect(json_decode(self::callShiki('themes'), true));
    }

    private static function callShiki(...$arguments): string
    {
        $process = new Process(["node", __DIR__ . '/shiki.js', ...array_values($arguments)]);
        $process->run();
        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return $process->getOutput();
    }

    private static function ensureThemeExists(string $theme): void
    {
        if (!file_exists($theme) && !self::themes()->contains($theme)) {
            throw new Exception("Invalid theme `{$theme}`");
        }
    }

    private static function ensureLanguageExists(string $language): void
    {
        $languages = self::languages();
        $aliases = $languages->pluck('aliases')->flatten();
        $languages = $languages->pluck('id')->merge($aliases);

        if (!$languages->contains($language)) {
            throw new Exception("Invalid language `{$language}`");
        }
    }
}
