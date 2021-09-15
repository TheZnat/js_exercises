// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и
// название валюты и возвращает сумму денег указанной валюты.
//
// Реализуйте данную функцию используя управляющие инструкции.
//
// Параметры функции:
//
// Массив, содержащий купюры разных валют с различными номиналами
// Наименование валюты
"use strict";

let getTotalAmount = (arrayMoney, strCurrency) =>{
    let sumMoney = 0;
    for (let i = 0; i < arrayMoney.length; i++){
        if (strCurrency.slice(0,3) === arrayMoney[i].slice(0,3)){
            sumMoney += parseInt(arrayMoney[i].slice(4,7));
        }
    }
    return sumMoney;
}


const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
console.log(getTotalAmount(money1, 'usd'));

const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money2, 'eur'))

const money3 = [
    'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];

console.log(getTotalAmount(money3, 'rub') );
