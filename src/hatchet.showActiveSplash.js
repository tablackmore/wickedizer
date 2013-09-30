/*global hatchet: false, document: false, window: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
hatchet.showActiveSplash = function () { //not in an iframe
    if (window.self === window.top) {
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = "100px";
        div.style.height = "30px";
        div.style.fontSize = "10px";
        div.style.color = "#777";
        div.style.backgroundColor = "red";
        div.style.bottom = "0px";
        div.style.left = "0px";
        div.style.padding = "4px";
        div.style.zIndex = "3147483647";
        div.innerHTML = "WICKEDIZER<br/>ACTIVE";
        document.querySelector("body").appendChild(div);
    }
};