//тз
//Js Скрипт, который подсчитает полезность и результативность игроков на основе их статистики.
// Оформи код в виде функции getStatistics с одним параметром — массивом игроков.
// Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name),
// забитые голы (свойство goals) и голевые пасы (свойство passes).
// Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности:
// (свойство coefficient) и результативность (свойство percent).
// Коэффициент полезности считается так: умножаем голы игрока на 2 (по условию) и
// прибавляем к этому значению все голевые пасы футболиста.
// Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму
// голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

let getStatistics = function (players) {
    let countGoals = 0
    for (let j = 0; j < players.length; j++){
        countGoals += players[j].goals;
    }
    for (let i = 0; i < players.length; i++){
        players[i].coefficient = players[i].goals * 2 + players[i].passes;
        players[i].percent = Math.round((players[i].goals * 100)/ countGoals)
    }
    return players;
};

let dataArray = [{"name":"Васька","goals":5,"passes":5},{"name":"Байт","goals":12,"passes":2},{"name":"Снежок","goals":2,"passes":7}];
console.log(getStatistics(dataArray));

// резкльтат выполнения
//[{"name":"Васька","goals":5,"passes":5,"coefficient":15,"percent":26},
// {"name":"Байт","goals":12,"passes":2,"coefficient":26,"percent":63},
// {"name":"Снежок","goals":2,"passes":7,"coefficient":11,"percent":11}]