// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Horn image and audio sound file changes
  const horn = document.getElementById('horn-select');
  const hornImage = document.querySelector('section#expose img');
  const sound = document.querySelector('audio');
  horn.addEventListener('change', function() {
    if (horn.value == 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'Image of air horn';
      sound.src = 'assets/audio/air-horn.mp3';
    } else if (horn.value == 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'Image of car horn';
      sound.src = 'assets/audio/car-horn.mp3';
    } else if (horn.value == 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'Image of party horn';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });

  // Volume on slider and volume image changes
  const volume = document.getElementById('volume');
  const volumeImage= document.querySelector('div#volume-controls img');
  volume.addEventListener('input', function() {
    if (volume.value == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
      volumeImage.alt = 'Volume level 0';
    } else if (volume.value > 0 && volume.value < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
      volumeImage.alt = 'Volume level 1';
    } else if (volume.value >= 33 && volume.value < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
      volumeImage.alt = 'Volume level 2';
    } else if (volume.value >= 67) {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
      volumeImage.alt = 'Volume level 3';
    }
    sound.volume = volume.value / 100;
  });

  // Volume on slider and volume image changes
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  playButton.addEventListener('click', function() {
    if (horn.value == 'party-horn') {
      sound.play();
      jsConfetti.addConfetti();
    } else {
      sound.play();
    }
  });
}