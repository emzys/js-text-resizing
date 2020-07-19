const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const text = document.querySelector('p');

let i = 20;

sizeUp.addEventListener('click', function () {
    i += 5;
    text.style.fontSize = i + 'px';
})


sizeDown.addEventListener('click', function () {
    i -= 5;
    text.style.fontSize = i + 'px';
})

color.addEventListener('click', function () {
    text.style.color = 'gold';
})