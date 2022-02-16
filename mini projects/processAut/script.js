// Добавить в массив bgImages URL к фонам времени суток
let bgImages = [
    'ph/1.jpg',
    'ph/2.jpg',
    'ph/3.jpg',
    'ph/4.jpg',
];
let bgIndex = 0;
let lamplightParameter = document.querySelector(".light");

let bgInterval = 10000; // 10 секунд
//Выбрать элемент у которого нужно изменять background
let bgElement = document.querySelector('.page');
function bgChange() {
    bgElement.style.backgroundImage = 'url(' + bgImages[bgIndex] + ')';
    if(bgIndex === 0) {
        // пеереключение класса для изменения режима работы лампочки
        lamplightParameter.classList.remove('light');
        lamplightParameter.classList.remove('light_early_morning');
    }
    if(bgIndex === 1) {
        // пеереключение класса для изменения режима работы лампочки
        lamplightParameter.classList.add('light');
        console.log(lamplightParameter);
    }
    if(bgIndex === 2) {
        // пеереключение класса для изменения режима работы лампочки
        lamplightParameter.classList.remove('light');
        lamplightParameter.classList.toggle('light_evening');

    }
    if(bgIndex === 3) {
        // пеереключение класса для изменения режима работы лампочки
        lamplightParameter.classList.toggle('light_evening');
        lamplightParameter.classList.toggle('light_early_morning');
    }
    bgIndex++;

    if (bgIndex >= bgImages.length) {
        // обнуление индекса массива, для зацикливание процесса
        bgIndex = 0;
    }
}
bgChange();
window.setInterval(bgChange, bgInterval);



