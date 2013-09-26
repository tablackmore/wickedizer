/*jslint browser:true */
/*global wickedizer: false, NodeFilter: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
wickedizer.htmlTextNodeWalker = function () {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
        node;
    while (node = walker.nextNode()) {
        node.nodeValue = wickedizer.textReplacer(node.nodeValue);
    }
};