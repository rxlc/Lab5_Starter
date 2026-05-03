// explore.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  let talkButtonElement = document.querySelector("#explore > button");
  let faceImageElement = document.querySelector("#explore > img");
  let voicesDropdown = document.getElementById("voice-select");
  let textToSpeakElement = document.getElementById("text-to-speak");

  let voicesList = [];

  function populateVoices() {
    voicesList = synth.getVoices();

    for (let i = 0; i < voicesList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = voicesList[i].name;

      voicesDropdown.appendChild(option);
    }
  }

  talkButtonElement.addEventListener("click", () => {
    let selectedVoice = voicesList[voicesDropdown.value];

    if (selectedVoice) {
      let utterance = new SpeechSynthesisUtterance(textToSpeakElement.value);
      utterance.voice = selectedVoice;

      utterance.addEventListener("start", (event) => {
        faceImageElement.src = "assets/images/smiling-open.png";
        faceImageElement.alt = "Smiling open face";
      });

      utterance.addEventListener("end", (event) => {
        faceImageElement.src = "assets/images/smiling.png";
        faceImageElement.alt = "Smiling face";
      });

      speechSynthesis.speak(utterance);
    }
  });

  window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
}
