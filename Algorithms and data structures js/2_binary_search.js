const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let item = 8;
let count = 0;

let binarySearch = (array, item) => {
  let start = 0, end = array.length, middle;
  let flag = false, position = -1;

  while (flag === flag && start <= end){
      count++;
      middle = Math.floor((start + end) / 2);
      if (array[middle] === item){
          flag = true;
          position = middle;
          return position;
      }
      if (array[middle] > item){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
  }
}

console.log(`Алгоритм бинарного поиска\nМассив: ${array}\nэлемент поиска: ${item}`);
console.log(`Индекс в массиве: ${binarySearch(array, item)}`);
console.log(`Количество итераций: ${count}`);