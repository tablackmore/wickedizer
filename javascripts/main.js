  document.addEventListener("DOMContentLoaded", function () {
    var wickedizerButton = document.querySelector("input"),
      textArea = document.querySelector("textArea"),
      wickedOutputContainer = document.querySelector("#wickedOutput"),
      wickedOutput = document.querySelector("#wickedOutput p");
    wickedizerButton.onclick = function () {
      wickedOutput.innerText = hatchet.wickedizer(textArea.value);
      wickedOutputContainer.style.display = "block";
    };
  });