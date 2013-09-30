/*global hatchet: false, document: false, NodeFilter: false, window: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
hatchet.htmlTextNodeWalker = function () {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
        node;
    while (node = walker.nextNode()) {
        node.nodeValue = hatchet.wickedizer(node.nodeValue);
    }
};