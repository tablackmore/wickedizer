var wickedizer = require('./wickedizer');
module.exports = {
    setUp: function (callback) {
        this.input = "The most Amazing thing happened to me yesterday. An AWESOME moon appeared. The best bit was that it was green. Green is such a brilliant color. It's so pretty. But the nicest color is red. Splendid.";
        this.output = "The most Wicked thing happened to me yesterday. A WICKED moon appeared. The wickedest bit was that it was green. Green is such a wicked color. It's so wicked. But the wickedest color is red. Wicked.";
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    correctOutput: function (test) {
        test.equals(wickedizer.textReplacer(this.input), this.output);
        test.done();
    }
};