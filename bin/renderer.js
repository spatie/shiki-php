const renderToHtml = function(lines, options = {}) {
    const bg = options.bg || '#fff'
    const fg = options.fg || '#000'
    const highlightedLines = makeHighlightSet(options.highlightLines)
    const addLines = makeHighlightSet(options.addLines)
    const deleteLines = makeHighlightSet(options.deleteLines)
    const focusLines = makeHighlightSet(options.focusLines)

    let html = ''
    let className = 'shiki'
    if (highlightedLines.size) {
        className += ' highlighted'
    }
    if (addLines.size) {
        className += ' added'
    }
    if (deleteLines.size) {
        className += ' deleted'
    }
    if (focusLines.size) {
        className += ' has-focus'
    }

    html += `<pre class="${className}" style="background-color: ${bg}; color: ${fg}" data-language="${options.langId}">`
    html += `<code>`

    lines.forEach((l, index) => {
        const lineNo = index + 1
        let highlightClasses = ''
        if (highlightedLines.has(lineNo)) {
            highlightClasses += ' hl'
        }
        if (addLines.has(lineNo)) {
            highlightClasses += ' add'
        }
        if (deleteLines.has(lineNo)) {
            highlightClasses += ' del'
        }
        if (focusLines.has(lineNo)) {
            highlightClasses += ' foc'
        }
        if (highlightClasses) {
            html += `<span class="${highlightClasses.trim()}">`
        }

        if (l.length > 0) {
            l.forEach(token => {
                let debugInfo = ''
                if (options.debugColors) {
                    const tokenScopes = token.explanation
                        .map(ex => ex.scopes.map(s => s.scopeName).join(', '))
                        .join('; ')
                    const themeMatches = token.explanation
                        .map(ex =>
                            ex.scopes
                                .map(s => s.themeMatches?.map(tm => tm.name).join(','))
                                .filter(Boolean)
                                .join('; ')
                        )
                        .filter(Boolean)
                        .join(' | ')
                    debugInfo = ` data-token-scopes="${tokenScopes}" data-theme-matches="${themeMatches}"`
                }
                html += `<span style="color: ${token.color}"${debugInfo}>${escapeHtml(
                    token.content
                )}</span>`
            })
        }

        if (highlightClasses) {
            // Newline goes before the close, so that display:block on the line will work
            html += `\n</span>`
        } else {
            html += `\n`
        }
    })
    html = html.replace(/\n*$/, '') // Get rid of final new lines
    html += `</code></pre>`

    return html
}

function commaSeparatedLinesToArray(lineList) {
    return lineList.split(',').map(segment => {
        if (Number(segment) > 0) {
            return Number(segment)
        }
        return segment
    })
}

const makeHighlightSet = function(highlightLines) {
    const lines = new Set();

    if (!highlightLines) {
        return lines
    }

    for (let lineSpec of highlightLines) {
        if (typeof lineSpec === 'number') {
            lines.add(lineSpec)
        } else if (lineSpec.includes('-')) {
            const [begin, end] = lineSpec.split('-').map(lineNo => Number(lineNo))
            for (let line = begin; line <= end; line++) {
                lines.add(line)
            }
        }
    }

    return lines
}

function escapeHtml(html) {
    return (
        html
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            //.replace(/&/g, '&amp;')  // why do this twice?
            .replace(/'/g, '&apos;')
    )
}

exports.renderToHtml = renderToHtml;
exports.makeHighlightSet = makeHighlightSet;
