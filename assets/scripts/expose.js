// expose.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  const jsConfetti = new JSConfetti();
  let hornDropdownElement = document.getElementById("horn-select");
  let volumeRangeElement = document.querySelector("#volume-controls input");
  let playButtonElement = document.querySelector("#expose > button");

  let hornImageElement = document.querySelector("#expose > img");
  let volumeImageElement = document.querySelector("#volume-controls img");

  let audioElement = document.querySelector("#expose > audio");

  hornDropdownElement.addEventListener("change", (event) => {
    let selectedHorn = event.target.value;

    hornImageElement.src = `assets/images/${selectedHorn}.svg`;
    hornImageElement.alt = selectedHorn;

    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeRangeElement.addEventListener("change", (event) => {
    let volumeValue = Number(event.target.value);

    let volumeLevel = 0;

    if (volumeValue == 0) {
      volumeLevel = 0;
    } else if (volumeValue < 33) {
      volumeLevel = 1;
    } else if (volumeValue < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }

    audioElement.volume = volumeValue / 100;
    volumeImageElement.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeImageElement.alt = `Volume level ${volumeLevel}`;
  });

  playButtonElement.addEventListener("click", (event) => {
    audioElement.play();

    if (hornDropdownElement.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
