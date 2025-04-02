import './styles.css';

const hideDiv = document.querySelector('.hideMe');
const wide = document.getElementById('wide');
const imageWidth = 800;
const amountOfImages = 4; //start from 0
let rightAmount = 0;

hideDiv.style.display = 'none';
document.getElementById('hideBtn').addEventListener('click', dropDown);
document.querySelector('.arrow1').addEventListener('click', prevImg);
document.querySelector('.arrow2').addEventListener('click', nextImg);
document.querySelectorAll('.dot').forEach((el) => {
  el.addEventListener('click', dotButton);
});

setInterval(nextImg, 5000);

function nextImg(event) {
  if (rightAmount < imageWidth * amountOfImages) {
    rightAmount += imageWidth;
    wide.style.right = rightAmount + 'px';
  } else if (rightAmount >= imageWidth * amountOfImages) {
    wide.style.right = 0 + 'px';
    rightAmount = 0;
  }
}

function prevImg(event) {
  if (rightAmount >= imageWidth) {
    rightAmount -= imageWidth;
    wide.style.right = rightAmount + 'px';
  } else if (rightAmount <= 0) {
    wide.style.right = imageWidth * amountOfImages + 'px';
    rightAmount = imageWidth * amountOfImages;
  }
}

function dotButton(event) {
  const buttonIndex = event.target.dataset.index;
  wide.style.right = buttonIndex * imageWidth + 'px';
  rightAmount = buttonIndex * imageWidth;
}

function dropDown(event) {
  console.log(event.target.children[0]);
  const div = event.target.children[0];
  if (div.style.display === 'none') {
    div.style.display = 'flex';
    console.log(event.target.children[0]);
    return 1;
  } else if (div.style.display === 'flex') {
    div.style.display = 'none';
    console.log(event.target.children[0]);
    return 1;
  }
}
