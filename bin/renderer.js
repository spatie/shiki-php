const FontStyle = {
    NotSet: -1,
    None: 0,
    Italic: 1,
    Bold: 2,
    Underline: 4,
};

const FONT_STYLE_TO_CSS = {
    [FontStyle.Italic]: "font-style: italic",
    [FontStyle.Bold]: "font-weight: bold",
    [FontStyle.Underline]: "text-decoration: underline",
};

const renderToHtml = function (lines, options = {}) {
    const theme = options.theme;
    const themes = options.themes;
    const highlightedLines = makeHighlightSet(options.highlightLines);
    const addLines = makeHighlightSet(options.addLines);
    const deleteLines = makeHighlightSet(options.deleteLines);
    const focusLines = makeHighlightSet(options.focusLines);

    let className = "shiki";

    if (highlightedLines.size) {
        className += " highlighted";
    }
    if (addLines.size) {
        className += " added";
    }
    if (deleteLines.size) {
        className += " deleted";
    }
    if (focusLines.size) {
        className += " focus";
    }

    let html = "";

    if (theme) {
        html += `<pre class="${className}" style="background-color: ${theme.theme.bg}">`;
    } else if (themes) {
        const backgroundStyles = Object.entries(themes).map(
            ([theme, theme$]) => {
                if (theme === "light") {
                    return `background-color:${theme$.theme.bg};`;
                }

                return `--shiki-${theme}-bg:${theme$.theme.bg};`;
            }
        );

        const foregroundStyles = Object.entries(themes).map(
            ([theme, theme$]) => {
                if (theme === "light") {
                    return `color:${theme$.theme.fg};`;
                }

                return `--shiki-${theme}:${theme$.theme.fg};`;
            }
        );

        const classes = `${className} shiki-themes ${Object.values(themes)
            .map((theme) => theme.theme.name)
            .join(" ")}`;

        html += `<pre class="${classes}" style="${backgroundStyles.join(
            ""
        )}${foregroundStyles.join("")}">`;
    }

    if (options.langId) {
        html += `<div class="language-id">${options.langId}</div>`;
    }
    html += `<code>`;

    lines.forEach((l, index) => {
        const lineNumber = index + 1;

        let lineClass = "line";
        if (highlightedLines.has(lineNumber)) {
            lineClass += " highlight";
        }
        if (addLines.has(lineNumber)) {
            lineClass += " add";
        }
        if (deleteLines.has(lineNumber)) {
            lineClass += " del";
        }
        if (focusLines.has(lineNumber)) {
            lineClass += " focus";
        }

        html += `<span class="${lineClass.trim()}">`;

        l.forEach((token) => {
            const cssDeclarations = [];
            if (theme) {
                cssDeclarations.push(`color:${token.color || theme.theme.fg}`);
            } else if (themes) {
                /**
                 * The `htmlStyle` property can be a `string` or an `object`. The `string` representation is deprecated.
                 * @see https://github.com/search?q=repo%3Ashikijs%2Fshiki+htmlStyle&type=code
                 */
                if (typeof token.htmlStyle === "string") {
                    cssDeclarations.push(token.htmlStyle);
                } else if (typeof token.htmlStyle === "object") {
                    for (const [key, value] of Object.entries(
                        token.htmlStyle
                    )) {
                        cssDeclarations.push(`${key}:${value}`);
                    }
                }
            }

            if (token.fontStyle > FontStyle.None) {
                cssDeclarations.push(FONT_STYLE_TO_CSS[token.fontStyle]);
            }
            html += `<span style="${cssDeclarations.join(";")}">${escapeHtml(
                token.content
            )}</span>`;
        });
        html += `</span>\n`;
    });
    html = html.replace(/\n*$/, ""); // Get rid of final new lines
    html += `</code></pre>`;

    return html;
};

const makeHighlightSet = function (highlightLines) {
    const lines = new Set();

    if (!highlightLines) {
        return lines;
    }

    for (let lineSpec of highlightLines) {
        if (lineSpec.toString().includes("-")) {
            const [begin, end] = lineSpec
                .split("-")
                .map((lineNo) => Number(lineNo));
            for (let line = begin; line <= end; line++) {
                lines.add(line);
            }
        } else if (lineSpec.toString().trim()) {
            lines.add(Number(lineSpec));
        }
    }

    return lines;
};

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

function escapeHtml(html) {
    return html.replace(/[&<>"']/g, (chr) => htmlEscapes[chr]);
}

exports.renderToHtml = renderToHtml;
