const shiki = require('shiki');
const renderer = require('./renderer');
const http = require('http');
const fs = require('fs');
const { getAllLanguages, getThemePath } = require("./util");

const args = Object.fromEntries(process.argv.slice(2).map(argument => {
    return argument.replace('--', '').split('=');
}));

const allLanguages = getAllLanguages();

shiki.getHighlighter({
    langs: allLanguages,
}).then((highlighter) => {
    const hostname = args.hostname || '127.0.0.1';
    const port = args.port || 7368;

    const server = http.createServer((req, res) => {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', async () => {
            try {
                if (data) {
                    const parsed = JSON.parse(data);

                    if (parsed.command === 'themes') {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(shiki.BUNDLED_THEMES));
                        return;
                    }

                    if (parsed.command === 'languages') {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(allLanguages));
                        return;
                    }

                    if (parsed.command === 'highlight') {
                        if (fs.existsSync(parsed.theme)) {
                            parsed.theme = getThemePath(parsed.theme);
                        }

                        await highlighter.loadTheme(parsed.theme);

                        const tokens = highlighter.codeToThemedTokens(
                            parsed.code,
                            parsed.language,
                            parsed.theme,
                        );
                        const options = parsed.options || {};
                        const theme = highlighter.getTheme(parsed.theme);

                        const html = renderer.renderToHtml(tokens, {
                            fg: theme.fg,
                            bg: theme.bg,
                            highlightLines: options.highlightLines,
                            addLines: options.addLines,
                            deleteLines: options.deleteLines,
                            focusLines: options.focusLines,
                        });

                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            html: html,
                        }));
                        return;
                    }
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end('ok');
            } catch (e) {
                console.log(e);
                res.statusCode = 500;
                res.end('Something went wrong: ' + e);
            }
        });
    });

    server.listen(port, hostname, () => {
        console.log(`Shiki server running at http://${hostname}:${port}/`);
    });
});
