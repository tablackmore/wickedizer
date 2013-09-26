/*jslint browser:true */
/*global safari: false,NodeFilter: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
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

    function showActive() {
        //not in an iframe
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
    }
    safari.self.tab.dispatchMessage("initialise");
    safari.self.addEventListener("message", function (request) {
        if (request.message.active) {
            wickedizer();
            showActive();
        } else {
            if (request.name !== "initialise") {
                location.reload();
            }
        }
    }, false);
}());