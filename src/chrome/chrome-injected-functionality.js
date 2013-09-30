/*global chrome: false, hatchet: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
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