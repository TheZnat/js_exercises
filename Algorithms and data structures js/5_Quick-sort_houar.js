const array = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0;

let quickSort = (array) => {
    if (array.length <= 1){
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less =[], greater =[];
    for (let i = 0; i < array.length; i++){
        count++;
        if (i === pivotIndex){
            continue;
        }
        if (array[i] < pivot){
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }

    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(`Алгоритм быстрой сортировки\nмассив: ${array}`);
console.log(`Отсортированный массив: ${quickSort(array)}`);
console.log(`Количество итераций: ${count}`);