// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  
  // Get voices
  let voices = [];
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    // const select = document.getElementById('voice-select');
    // select.innerHTML = '<option disabled selected>Select Voice:</option>';
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name}(${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      document.getElementById('voice-select').appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Play audio
  const speak = document.querySelector('button');
  const speakingText = document.querySelector('textarea');
  const speakingVoice = document.querySelector('select');
  const image = document.querySelector('img');
  speak.addEventListener('click', function() {  
    let utter = new SpeechSynthesisUtterance(speakingText.value);
    for (const voice of voices) {
      if (voice.name === speakingVoice.selectedOptions[0].getAttribute('data-name')) {
        utter.voice = voice;
      }
    }
    utter.onstart = function() {
      image.src = 'assets/images/smiling-open.png';
    }
    utter.onend = function() {
      image.src = 'assets/images/smiling.png';
    }
    speechSynthesis.speak(utter);
  });
  
}