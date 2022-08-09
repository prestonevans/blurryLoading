const backgroundImage = document.querySelector('main');
const loader = document.querySelector('.loader');
const intervalTime = 20;

let count = 100;

let intervalId = setInterval(() => {
  const blurAmount = count / 100;
  backgroundAnimation(blurAmount);
  loaderAnimation(blurAmount);
  if (count === 0) {
    clearInterval(intervalId);
    return;
  }
  count--;
}, intervalTime);

function backgroundAnimation(blurAmount) {
  backgroundImage.style.filter = `blur(${20 * blurAmount}px)`;
}

function loaderAnimation(blurAmount) {
  loader.innerText = `${100 - count}%`;
  if (count <= 75) {
    loader.style.filter = `blur(${8 * (1 - blurAmount)}px)`;
  }
  if (count <= 30) {
    loader.style.opacity = `${3 * blurAmount}`;
  }
}
