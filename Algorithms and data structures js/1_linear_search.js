let array = [1,4,5,8,1,2,7,5,2,11];
let item = 8;
let count = 0;
let linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++){
        count++;
        if (array[i] === item){
            return i;
        }
    }
    return null;
}
console.log(`Алгоритм линейного поиска\nМассив: ${array}\nэлемент поиска: ${item}`);
console.log(`Индекс в массиве: ${linearSearch(array,item)}`);
console.log(`Количество итераций: ${count}`);