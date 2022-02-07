//Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий
// только указанные свойства. Параметры:
// Исходный объект
// Массив имен свойств


const pick = (obj, propertiesArray) => {
    let newObj = {};
    let keys = Object.keys(obj);

    for ( let prop of propertiesArray) {
        for (let key of keys) {
            if (key === prop) {
                newObj[`${key}`] = obj[`${key}`];
            }
        }
    }
    return newObj;
}

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

console.log(pick(data, ['user']));
console.log(pick(data, ['user', 'os']));
console.log(pick(data, []));
console.log(pick(data, ['none', 'cores']));

