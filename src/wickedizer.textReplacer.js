/*global wickedizer: false,console: false, require: false, module: false, exports: false */
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