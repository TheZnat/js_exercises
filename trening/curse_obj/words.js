//Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект.
// В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось
// в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний
// регистр, чтобы не пропускались дубли.

let countWords = (str) =>{
    const resultObj = {};
    if (str.length === 0){
        return resultObj;
    }
    str = str.toLowerCase();
    let arrayStr = str.split(' ');

    for (const item of arrayStr) {
        if (resultObj.hasOwnProperty(item)) {
            resultObj[item] += 1;
        } else {
            resultObj[item] = 1;
        }
    }
    return resultObj;
}

const text1 = 'one two three two ONE one wow';
const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
console.log(countWords(text1));
console.log(countWords(''));










