
//Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его:
// если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

let flatten = (array) =>{
    let result = [];

    for ( let item of array){
        if(Array.isArray(item)){
            result = [...result, ...item];
        }
        else{
            result = [...result, item];
        }
    }
    return result;
}

console.log(flatten([1, [3, 2], 9]));