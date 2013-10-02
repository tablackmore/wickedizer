
 (function () {
 "use strict";
var hatchet = {};
hatchet.data = {};
hatchet.data.wickedizer = {};
hatchet.data.wickedizer.wickedWords = ["great", "awesome", "incredible", "wonderful", "splendid", "awesome", "incredible", "amazing", "amasing"];
hatchet.data.wickedizer.wickedestWords = ["best", "nicest"];
hatchet.data.wickedizer.properWickedWords = ["awesome", "incredible", "amazing", "amasing"];
hatchet.wickedizer = (function () {
var regExpMostWicked = "\\bmost " + hatchet.data.wickedizer.wickedWords.join("\\b|\\bmost ") + "\\b",
        regExpWickedest = new RegExp(regExpMostWicked + "|" + hatchet.data.wickedizer.wickedestWords.join("|"), 'gi'),
        regExpProperWicked = new RegExp("\\b" + hatchet.data.wickedizer.properWickedWords.join("\\b|\\b") + "\\b|\\ban " + hatchet.data.wickedizer.wickedWords.join("\\b|\\ban ") + "\\b|\\ban " + hatchet.data.wickedizer.wickedWords.join("\\b|\\ban ") + "\\b", 'gi'),
        regExpWicked = new RegExp(hatchet.data.wickedizer.wickedWords.join("|") + "|\\ban " + hatchet.data.wickedizer.wickedWords.join("|\\ban "), 'gi'),
        wickedize = function (text) {
            if (typeof text === "string") {
                text = text.replace(regExpWickedest, function (match) {
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
                text = text.replace(regExpProperWicked, function (match) {
                    var output = "proper wicked";
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
                text = text.replace(regExpWicked, function (match) {
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
            }
            return text;
        };
    return wickedize;
}());
hatchet.htmlTextNodeWalker = function () {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
        node;
    while (node = walker.nextNode()) {
        node.nodeValue = hatchet.wickedizer(node.nodeValue);
    }
};
hatchet.showActiveSplash = function () { //not in an iframe
    if (window.self === window.top) {
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = "100px";
        div.style.height = "30px";
        div.style.fontSize = "10px";
        div.style.color = "#777";
        div.style.backgroundColor = "red";
        div.style.bottom = "0px";
        div.style.left = "0px";
        div.style.padding = "4px";
        div.style.zIndex = "3147483647";
        div.innerHTML = "WICKEDIZER<br/>ACTIVE";
        document.querySelector("body").appendChild(div);
    }
};
chrome.runtime.sendMessage({
    type: "active"
}, function (response) {
    if (response.active) {
        hatchet.htmlTextNodeWalker();
        hatchet.showActiveSplash();
    }
});
chrome.runtime.onMessage.addListener(function (request) {
    if (request.active) {
        hatchet.htmlTextNodeWalker();
        hatchet.showActiveSplash();
    } else {
        location.reload();
    }
});
}());