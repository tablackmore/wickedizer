var hatchet = require('./hatchet');
module.exports = {
    setUp: function (callback) {
        this.input = "The most Amazing thing happened to me yesterday. An AWESOME moon appeared. The best bit was that it was green. Green is such a brilliant color. It's so pretty. But the nicest color is red. Splendid. Amazing!";
        this.output = "The Wickedest thing happened to me yesterday. A PROPER WICKED moon appeared. The wickedest bit was that it was green. Green is such a brilliant color. It's so pretty. But the wickedest color is red. Wicked. Proper Wicked!";
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    correctOutput: function (test) {
        test.equals(hatchet.wickedizer(this.input), this.output);
        test.done();
    }
};