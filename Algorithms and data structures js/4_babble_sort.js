const array = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

let bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]){
                let tmp = array[j];
                array[j] = array[j + 1];;
                array[j + 1] = tmp;
            }
            count++;
        }
    }
    return array;
}

console.log(`Алгоритм сортировки пузырьком\nмассив: ${array}`);
console.log(`Отсортированный массив: ${bubbleSort(array)}`);
console.log(`Количество итераций: ${count}`);