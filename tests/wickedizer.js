/* wickedizer - v0.0.1 - 2013-09-26 */
var wickedizer = {};
wickedizer.data = {};
wickedizer.data.wickedWords = ["great", "awesome", "incredible", "brilliant", "wonderful", "amazing", "amasing", "lovely", "beautiful", "pretty", "splendid"];
wickedizer.data.wickedestWords = ["best", "nicest"];
wickedizer.textReplacer = function (text) {
    "use strict";
    if (typeof text === "string") {
        text = text.replace(new RegExp(wickedizer.data.wickedWords.join("|") + "|an " + wickedizer.data.wickedWords.join("|an "), 'gi'), function (match) {
            var output = "wicked";
            if (match.match(new RegExp("an ", "gi"))) {
                output = "a " + output;
            }
            // TitleCase
            if (match.match(new RegExp("([A-Z]{1}[a-z]+)", "g"))) {
                output = output.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
            // UpperCase
            if (match.match(new RegExp("([A-Z]{1}[A-Z]+)", "g"))) {
                output = output.toUpperCase();
            }
            return output;
        });
        text = text.replace(new RegExp(wickedizer.data.wickedestWords.join("|"), 'gi'), function (match) {
            // TitleCase
            if (match.match(new RegExp("([A-Z]{1}[a-z]+)", "g"))) {
                return "Wickedest";
            }
            // UpperCase
            if (match.match(new RegExp("([A-Z]{1}[A-Z]+)", "g"))) {
                return "WICKEDEST";
            }
            // LowerCase
            return "wickedest";
        });
    }
    return text;
};
wickedizer.htmlTextNodeWalker = function () {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
        node;
    while (node = walker.nextNode()) {
        node.nodeValue = wickedizer.textReplacer(node.nodeValue);
    }
};
wickedizer.showActiveSplash = function () { //not in an iframe
    if (window.self === window.top) {
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = "100px";
        div.style.height = "30px";
        div.style.fontSize = "10px";
        div.innerHTML = "WICKEDIZER<br/>MODE ON";
        div.style.backgroundColor = "red";
        div.style.bottom = "0px";
        div.style.left = "0px";
        div.style.padding = "4px";
        div.style.zIndex = "500";
        document.querySelector("body").appendChild(div);
    }
};