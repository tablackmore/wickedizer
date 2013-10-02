/*global hatchet:false, console: false, require: false, module: false, exports: false */
var hatchet = require('./hatchet');
module.exports = {
    setUp: function (callback) {
        "use strict";
        this.input = ["The most Amazing thing happened to me yesterday.", "An AWESOME moon appeared.", "The best bit was that it was green.", "Green is such a brilliant color.", "It's so pretty.", "But the nicest color is red.", "Splendid.", "Amazing!", "That's an awesome fucking story, kid."];
        this.output = ["The Wickedest thing happened to me yesterday.", "A PROPER WICKED moon appeared.", "The wickedest bit was that it was green.", "Green is such a brilliant color.", "It's so pretty.", "But the wickedest color is red.", "Wicked.", "Proper Wicked!", "That's a proper wicked fucking story, kid."];
        callback();
    },
    tearDown: function (callback) {
        "use strict";
        // clean up
        callback();
    },
    correctOutput: function (test) {
        "use strict";
        var i;
        for (i = 0; i < this.input.length; i = i + 1) {
            test.equals(hatchet.wickedizer(this.input[i]), this.output[i]);
        }
        test.done();
    }
};