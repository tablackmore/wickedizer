/*global hatchet: false,console: false, require: false, module: false, exports: false */
hatchet.wickedizer = (function () {
    "use strict";
    var regExpMostWicked = "\\bmost " + hatchet.data.wickedizer.wickedWords.join("\\b|\\bmost ") + "\\b",
        regExpWickedest = new RegExp(regExpMostWicked + "|" + hatchet.data.wickedizer.wickedestWords.join("|"), 'gi'),
        regExpProperWicked = new RegExp("\\b" + hatchet.data.wickedizer.properWickedWords.join("\\b|\\b") + "\\b|\\ban " + hatchet.data.wickedizer.wickedWords.join("\\b|\\ban ") + "\\b", 'gi'),
        regExpWicked = new RegExp(hatchet.data.wickedizer.wickedWords.join("|") + "|an " + hatchet.data.wickedizer.wickedWords.join("|an "), 'gi'),
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