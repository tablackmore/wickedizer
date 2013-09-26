/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
(function () {
    "use strict";
    var wickedWords = ["great", "awesome", "incredible", "brilliant", "wonderful", "amazing", "amasing", "lovely", "beautiful", "pretty", "splendid"],
        wickedestWords = ["best", "nicest"];

    function wickedize(text) {
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
    document.addEventListener("DOMContentLoaded", function () {
        var wickedizerButton = document.querySelector("input"),
            textArea = document.querySelector("textArea"),
            wickedOutputContainer = document.querySelector("#wickedOutput"),
            wickedOutput = document.querySelector("#wickedOutput p");
        wickedizerButton.onclick = function () {
            wickedOutput.innerText = wickedize(textArea.value);
            wickedOutputContainer.style.display = "block";
        };
    });
}());