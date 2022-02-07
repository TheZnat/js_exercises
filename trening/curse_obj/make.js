//Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:
//
// Имя
// Объект с дополнительными свойствами
// Также у компаний есть два свойства со значениями по умолчанию:
//
// state – moderating
// createdAt – текущая дата

let make = (strNameObj, obj) =>{
    let objDefault = {name: strNameObj,state: 'moderating', createdAt: new Date().toLocaleDateString()}
    const newObj = {...objDefault,...obj};
    return newObj;
}

const company1 = make('Hexlet');
console.log(company1);
const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company2);