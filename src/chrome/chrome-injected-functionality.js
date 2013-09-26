/*global chrome: false, wickedizer: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
chrome.runtime.sendMessage({
    type: "active"
}, function (response) {
    if (response.active) {
        wickedizer.htmlTextNodeWalker();
        wickedizer.showActiveSplash();
    }
});
chrome.runtime.onMessage.addListener(function (request) {
    if (request.active) {
        wickedizer.htmlTextNodeWalker();
        wickedizer.showActiveSplash();
    } else {
        location.reload();
    }
});