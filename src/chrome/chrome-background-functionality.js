/*global chrome: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
(function () {
    "use strict";
    var activate = false;

    function updateIcon() {
        if (activate) {
            chrome.browserAction.setIcon({
                path: "icons/active.png"
            });
        } else {
            chrome.browserAction.setIcon({
                path: "icons/inactive.png"
            });
        }
    }
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.type === "active") {
            sendResponse({
                active: activate
            });
        }
    });
    chrome.browserAction.onClicked.addListener(function () {
        var i;
        activate = !activate;
        updateIcon();
        chrome.tabs.query({
            //active: true
        }, function (tabs) {
            for (i = 0; i < tabs.length; i = i + 1) {
                chrome.tabs.sendMessage(tabs[i].id, {
                    active: activate
                });
            }
        });
    });
}());