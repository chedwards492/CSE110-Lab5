// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const textToSpeakInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const smilingFace = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {

    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.onvoiceschanged = populateVoiceList;

  talkButton.addEventListener('click', () => {
    const text = textToSpeakInput.value;
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);

    utterance.voice = selectedVoiceObj;

    utterance.onstart = () => {
      smilingFace.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      smilingFace.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}