/*global safari: false,hatchet: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
safari.self.tab.dispatchMessage("initialise");
safari.self.addEventListener("message", function (request) {
    if (request.message.active) {
        hatchet.htmlTextNodeWalker();
        hatchet.showActiveSplash();
    } else {
        if (request.name !== "initialise") {
            location.reload();
        }
    }
}, false);