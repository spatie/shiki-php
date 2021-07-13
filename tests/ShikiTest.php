<?php

use Spatie\ShikiPhp\Shiki;

test('it can highlight php', function () {
    $code = '<?php echo "Hello World"; ?>';

    $expectedHtml = '<pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">&lt;?</span><span style="color: #D8DEE9FF">php </span><span style="color: #81A1C1">echo</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">Hello World</span><span style="color: #ECEFF4">&quot;</span><span style="color: #81A1C1">;</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">?&gt;</span></span></code></pre>';

    $this->assertEquals($expectedHtml, Shiki::highlight($code));
});
