let numbers = [2, 4, 7, 4, 7, 2];
let number = 4;
let lastIndex = 0;
let arrayIndex = [];
let temp = 0;

for (let i = 0; i < numbers.length; ++i){
    if(number === numbers[i] ){
        arrayIndex[temp] = i;
        temp++;
    }
}
if (temp === 0) {
    lastIndex = -1 ;
} else {
    lastIndex = arrayIndex[temp - 1];
}

console.log('Mассив: ');
console.log(numbers)
console.log('последний индекс элемента в массиве, который надо найти: ' + number);
console.log('Индекс: ' + lastIndex);

