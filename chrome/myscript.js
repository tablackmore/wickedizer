/*jslint browser:true */
/*global chrome: false,NodeFilter: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
(function () {
    "use strict";
    var wickedWords = ["great", "awesome", "incredible", "wonderful", "amazing", "amasing", "lovely", "beautiful", "pretty"],
        wickedestWords = ["best", "nicest"];

    function wickedise(text) {
        var i;
        if (typeof text === "string") {
            for (i = 0; i < wickedWords.length; i = i + 1) {
                text = text.replace(new RegExp("an " + wickedWords[i], 'gi'), "a wicked");
                text = text.replace(new RegExp(wickedWords[i], 'g'), "wicked");
                text = text.replace(new RegExp(wickedWords[i].toUpperCase(), 'g'), "WICKED");
                text = text.replace(new RegExp(wickedWords[i][0].toUpperCase() + wickedWords[i].substr(1, wickedWords[i].length), 'g'), "Wicked");
            }
            for (i = 0; i < wickedestWords.length; i = i + 1) {
                text = text.replace(new RegExp(wickedestWords[i], 'g'), "wickedest");
                text = text.replace(new RegExp(wickedestWords[i].toUpperCase(), 'g'), "WICKEDEST");
                text = text.replace(new RegExp(wickedestWords[i][0].toUpperCase() + wickedestWords[i].substr(1, wickedestWords[i].length), 'g'), "Wickedest");
            }
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