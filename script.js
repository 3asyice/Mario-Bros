const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {

  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 700);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '70px';
    mario.style.marginLeft = '35px';

    cloud.style.animation = 'cloud 20s infinite linear';
    cloud.style.left = `${cloudPosition}px`;

    gameOver.style.visibility = 'visible';

    clearInterval(loop);
  }
}, 10);

const restart = () => {

  gameOver.style.visibility = 'hidden';

  pipe.style.animation = 'pipe-animations 1.5s infinite linear';
  pipe.style.left = ``;

  mario.src = './images/2d-mario-running.gif';
  mario.style.width = '130px';
  mario.style.bottom = '0px';
  mario.style.marginLeft = '';
  mario.style.animation = '';

  cloud.style.left = ``;

  const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './images/game-over.png';
      mario.style.width = '70px';
      mario.style.marginLeft = '35px';

      cloud.style.animation = 'cloud 20s infinite linear';
      cloud.style.left = `${cloudPosition}px`;

      gameOver.style.visibility = 'visible';

      clearInterval(loop);
    }
  }, 10);
}

document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
document.addEventListener('DOMContentLoaded', function() {
  // Criar o elemento de áudio
  var audio = new Audio('https://kappa.vgmsite.com/soundtracks/super-mario-bros/jiqfbhrhqx/01.%20Ground%20Theme.mp3');

  // Adicionar evento de clique ao documento
  document.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
    }
  });
});