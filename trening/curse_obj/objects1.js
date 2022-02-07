//реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение
// по указанным ключам. Параметры:
// Исходный объект
// Цепочка ключей (массив), по которой ведётся поиск значения
// В случае, когда добраться до значения невозможно, возвращается null.

const getObj = (obj, propertiesArray) => {
    let current = obj;
    for (let property of propertiesArray){
        const hasBarProperty = obj.hasOwnProperty.call(current, property);
        if (!hasBarProperty){
            return null;
        }
        current = current[property];
    }
    return current;
}

const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};

console.log(getObj(data, ['undefined'])); // null
console.log(getObj(data, ['user'])); // 'ubuntu'
console.log(getObj(data, ['user', 'ubuntu'])); // null
console.log(getObj(data, ['hosts', 1, 'name'])); // 'web2'
console.log(getObj(data, ['hosts', 0])); // { name: 'web1' }
console.log(getObj(data, ['hosts', 1, null])); // 3
console.log(getObj(data, ['hosts', 1, 'active'])); // false

