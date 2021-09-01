<?php

use Spatie\ShikiPhp\Shiki;

it('can highlight blade', function () {
    $code = '@if(true) {{ "Hello world" }} @endif';

    $highlightedCode = Shiki::highlight($code, language: 'blade');

    expect($highlightedCode)
        ->toEqual('<pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">@if</span><span style="color: #D8DEE9FF">(</span><span style="color: #81A1C1">true</span><span style="color: #D8DEE9FF">) </span><span style="color: #81A1C1">{{</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">Hello world</span><span style="color: #ECEFF4">&quot;</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">}}</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">@endif</span></span></code></pre>');
});
