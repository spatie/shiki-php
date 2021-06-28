<?php

namespace Spatie\ShikiPhp;

use Illuminate\Support\Collection;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Shiki
{
    public static function codeToHtml(string $code, string $language = 'php', string $theme = 'nord'): string
    {
        if (! self::themes()->contains($theme)) {
            throw new \Exception("Invalid theme `{$theme}`");
        }

        $languages = self::languages();
        $aliases = $languages->pluck('aliases')->flatten();
        if (! $languages->pluck('id')->merge($aliases)->contains($language)) {
            throw new \Exception("Invalid language `{$language}`");
        }

        $process = new Process(["node", __DIR__ . '/shiki.js', $code, $language, $theme]);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return $process->getOutput();
    }

    public static function languages(): Collection
    {
        $process = new Process(["node", __DIR__ . '/shiki.js', 'languages']);
        $process->run();
        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        $languages = json_decode($process->getOutput(), true);

        return collect($languages);
    }

    public static function themes(): Collection
    {
        $process = new Process(["node", __DIR__ . '/shiki.js', 'themes']);
        $process->run();
        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        $themes = json_decode($process->getOutput(), true);

        return collect($themes);
    }
}
