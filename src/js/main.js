var $source,
    $target;

function init() {
    if (!$source)
        $source = $("#source");

    if (!$target)
        $target = $("#target");
}

function toHtmlList(lines, ulOrOl) {
    var text;
    var tag;
    if (typeof myVar === 'undefined' || urOrOl === null || urOrOl === true) {
        // UL
        tag = "ul";
    }
    else if (urOrOl === false) {
        // OL
        tag = "ol";
    }
    else {
        tag = urlOrOl;
    }

    var newLines = [];
    $.each(lines, function (index, line) {
        var newLine = line.trim();
        if (newLine)
            newLines.push("<li>" + newLine + "</li>\n");
    });

    return `<${tag}>\n\t` + newLines.join("")
    + `\t</${tag}>` ;
}

/**
 * TODO
 * 
 * @param {*} op The type of the operation for the conversion
 */
function convert(op) {
    $source = $("#source");
    $target = $("#target");

    const sourceText = $source.val();
    var targetText = toHtmlList(sourceText.split("\n"));
    $target.val(targetText);
}

function clear() {
    init();

    $source.val("");
    $target.val("");
}

function copy2Clipboard() {
    init();
    $target.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.debug('Text copied to clipboard!');
      } catch (err) {
          window.prompt("To copy the text to clipboard: Ctrl+C, Enter", $$target);
      }
    // This is for removing the element
    //$target.remove();
}

