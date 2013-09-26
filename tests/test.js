/*jslint browser:true */
/*global wickedise: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var input = "The most Amazing thing happened to me yesterday. An AWESOME moon appeared. The best bit was that it was green. Green is such a brilliant color. It's so pretty. But the nicest color is red. Splendid.",
    output = "The most Wicked thing happened to me yesterday. A WICKED moon appeared. The wickedest bit was that it was green. Green is such a wicked color. It's so wicked. But the wickedest color is red. Wicked.";
if (wickedise(input) !== output) {
    console.error("FAIL");
    console.log("Expected: " + output);
    console.log("Actual: " + wickedise(input));
} else {
    console.log("PASSED");
}