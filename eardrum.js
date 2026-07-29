'use strict';

/* Star */

const btn = document.querySelector('#star button');
const img = btn.querySelector('img');
let isFav = false;

btn.addEventListener('click', () => {
  isFav = !isFav;

  if (isFav) {
    img.src = 'imgs/fav-star.png'; 
  } else {
    img.src = 'imgs/star.png';  
  }
});

/* Artist Hover */

const coverArt = document.getElementById('cover-art');
let isHover = false;

coverArt.addEventListener('click', () => {
  if (isHover) {
    coverArt.src = 'imgs/ninasimone.png';
  } else {
    coverArt.src = 'imgs/art_bio_hover.png';
  }
  isHover = !isHover;
});

/* Music Player */

const musicBtn = document.querySelector('#music-player-toggle button');
const musicImg = musicBtn.querySelector('img');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  musicImg.src = isPlaying ? 'imgs/PAUSE.png' : 'imgs/PLAY.png';
});

/* Toggle */

const toggleBtn = document.getElementById('toggle');
const toggleImg = toggleBtn.querySelector('img');
let isDark = false;

toggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  toggleImg.src = isDark ? 'imgs/dark-toggle.png' : 'imgs/light-toggle.png';
  document.documentElement.classList.toggle('dark-mode', isDark);
});

/* Download */

const dlBtn = document.getElementById('download')
const dlImg = dlBtn.querySelector('img');

dlBtn.addEventListener('click', () => {
  dlImg.src = 'imgs/dl-blue.png'; 
  dlBtn.disabled = true;    
});
