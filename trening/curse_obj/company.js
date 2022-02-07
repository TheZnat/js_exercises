//Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных,
// а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура
// одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, website.

let ICompany = (obj1, obj2) =>{
    let arrayObj1 = [], arrayObj2 = [];
    InObjToArray(obj1,arrayObj1);
    console.log(arrayObj1);
    InObjToArray(obj2,arrayObj2);
    console.log(arrayObj2);

    for (let i = 0; i < arrayObj1.length; i++){
        if(arrayObj1[i] !== arrayObj2[i]){
            return false;
        }
    }
    return true;
}

let InObjToArray = (obj, arrayObj) =>{
    for (let i = 0; i < Object.keys(obj).length; i++){
        switch (i){
            case 0:
                arrayObj.push(obj['name']);
                break;
            case 1:
                arrayObj.push(obj['state']);
                break;
            case 2:
                arrayObj.push(obj['website']);
                break;
        }
    }
}


// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// const company2 = { name: 'Hexlet', website: 'https://hexlet.io', state: 'published' };

const company1 = { name: 'Hexlet' };
const company2 = { name: 'Google' };

// console.log(ICompany(company1,company2));

// let InCompany = (company1, company2) => {
//     const keys = ['name', 'state', 'website'];
//     for (const key of keys) {
//         if (company1[key] !== company2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(ICompany(company1,company2));