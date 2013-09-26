/*jslint browser:true */
/*global chrome: false,NodeFilter: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
(function () {
    "use strict";
    var wickedWords = ["great", "awesome", "incredible", "brilliant", "wonderful", "amazing", "amasing", "lovely", "beautiful", "pretty"],
        wickedestWords = ["best", "nicest"];

    function wickedise(text) {
        "use strict";
        if (typeof text === "string") {
            text = text.replace(new RegExp(wickedWords.join("|") + "|an " + wickedWords.join("|an "), 'gi'), function (match) {
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
            text = text.replace(new RegExp(wickedestWords.join("|"), 'gi'), function (match) {
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
    }
    /*Walk through all the text nodes in the body and wickedise their text*/

    function wickedizer() {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
            node;
        while (node = walker.nextNode()) {
            node.nodeValue = wickedise(node.nodeValue);
        }
    }
    chrome.runtime.sendMessage({
        type: "active"
    }, function (response) {
        if (response.active) {
            wickedizer();
        }
    });
    chrome.runtime.onMessage.addListener(function (request) {
        if (request.active) {
            wickedizer();
        } else {
            location.reload();
        }
    });
}());