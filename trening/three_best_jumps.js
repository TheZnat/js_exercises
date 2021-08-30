//Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBes
let qualificationDistance = 200; // квалификационное значение
let attempts = [120, 150, 160, 201, 203, 180, 202]; // все прыжки
let qualified = false;
let averageBest = 0;
let swap = 0;

let bubbleSort = (arr) => {
    for (let j = arr.length - 1; j > 0; j--){
        for (let i = 0; i < j; i++ ){
            if(arr[i] > arr[i + 1]){
                swap = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swap;
            }
        }
    }
}
bubbleSort(attempts);
for (let i = 1; i <= 3; i++) {
    averageBest += attempts[attempts.length - i];
}
averageBest /= 3;
if (averageBest > qualificationDistance) {
    qualified = true;
}
console.log('Квалификация: ' + qualified);
console.log('среднее значение этих трёх прыжков: ' + averageBest);
