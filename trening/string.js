//Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.
//
// Параметры функции
// Список определений следующего формата:
//
//  const definitions = [
//   ['definition1', 'description1'],
//   ['definition2', 'description2']
// ];
// То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

let buildDefinitionList = (array) =>{
    let parts = [];
    if (array.length === 0 ){
        return parts;
    }
    for (let indexFirst = 0; indexFirst < array.length; indexFirst++) {
        for (let indexSecond = 0; indexSecond < array[indexFirst].length; indexSecond++){
            if(indexSecond === 0) {
                parts.push(`<dt>${array[indexFirst][indexSecond]}</dt>`)
            } else {
                parts.push(`<dd>${array[indexFirst][indexSecond]}</dd>`)
            }
        }
    }
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
    return result;
}

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
    ['Собака', 'друг человека'],
];
let definitions2 =[];

console.log(buildDefinitionList(definitions));
console.log(buildDefinitionList(definitions2));