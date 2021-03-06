/* wickedizer - v0.0.1 - 2013-10-02 */
(function () {
    "use strict";
    var active = false;

    function broadcast(name, content) {
        var i, tabs, j, windows = safari.application.browserWindows;
        for (i = 0; i < windows.length; i = i + 1) {
            tabs = windows[i].tabs;
            for (j = 0; j < tabs.length; j = j + 1) {
                tabs[j].page.dispatchMessage(name, content);
            }
        }
    }

    function changeToolbarIcon(newIconName) {
        var iconUri = safari.extension.baseURI + 'icons/' + newIconName;
        safari.extension.toolbarItems[0].image = iconUri;
    }

    function setToolbarIcon() {
        if (active) {
            changeToolbarIcon("active.png");
        } else {
            changeToolbarIcon("inactive.png");
        }
    }

    function performClick() {
        active = !active;
        setToolbarIcon();
        broadcast("active", {
            active: active
        });
    }

    function respondToInitialMessage(event) {
        event.target.page.dispatchMessage("initialise", {
            active: active
        });
    }
    safari.application.addEventListener("message", respondToInitialMessage, false);
    safari.application.addEventListener("command", performClick, false);
    setToolbarIcon();
}());