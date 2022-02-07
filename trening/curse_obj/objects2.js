// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному
// списку ключей. Параметры:
// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.

const company = {
    name: null,
    state: 'moderating',
    password: 'admin123'
};

const data = {
    name: 'Hexlet',
    state: 'published',
    numer_id: 100101,
    password: null
};

// Вызовы ниже нужно рассматривать как независимые

let fill = (merged, propertiesArray, obj1) => {
    if (propertiesArray.length !== 0) {
        for (let i = 0; i < propertiesArray.length; i++) {
            for (let attr in merged) {
                if (attr === propertiesArray[i]) {
                    merged[attr] = obj1[attr];
                }
            }
        }
    } else {
        Object.assign(merged, obj1);
    }
}

fill(company, ['name', 'password'], data);
console.table(company);

fill(company, [], data);
console.table(company);

