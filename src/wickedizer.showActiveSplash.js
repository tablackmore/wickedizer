/*jslint browser:true */
/*global wickedizer: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
wickedizer.showActiveSplash = function () { //not in an iframe
    if (window.self === window.top) {
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = "100px";
        div.style.height = "30px";
        div.style.fontSize = "10px";
        div.innerHTML = "WICKEDIZER<br/>MODE ON";
        div.style.backgroundColor = "red";
        div.style.bottom = "0px";
        div.style.left = "0px";
        div.style.padding = "4px";
        div.style.zIndex = "500";
        document.querySelector("body").appendChild(div);
    }
};