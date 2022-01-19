let offSet = 0;// смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',  function () {
    offSet += 512;
    if(offSet > 2048){
        offSet = 0;
    }
    sliderLine.style.left = -offSet + 'px';
})

document.querySelector('.slider-prev').addEventListener('click',  function () {
    offSet -= 512;
    if(offSet < 0){
        offSet = 2048;
    }
    sliderLine.style.left = -offSet + 'px';
})
let page = document.querySelector('.page');

let themeButton =() => {
    page.classList.toggle('dark-theme');
}