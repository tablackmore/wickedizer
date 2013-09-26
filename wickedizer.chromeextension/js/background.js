var activate = false;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "active") {
        sendResponse({
            active: activate
        });
    }
});

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
chrome.browserAction.onClicked.addListener(function () {
    "use strict";
    activate = !activate;
    updateIcon();
    chrome.tabs.query({
        //active: true
    }, function (tabs) {
        for (var i = 0; i < tabs.length; i = i + 1) {
            chrome.tabs.sendMessage(tabs[i].id, {
                active: activate
            });
        }
    });
});