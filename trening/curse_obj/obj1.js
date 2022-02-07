//Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока.
// То есть приводит их к определенному виду.

const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
};
console.log(lesson);

let normalObj = (obj) =>{
    let FirstUpOtherLow = (str) => {
        let temp = str.toLowerCase();
        return `${str.charAt(0).toUpperCase()}${temp.slice(1)}`;
    }
    obj.name = FirstUpOtherLow(obj.name);
    obj.description = FirstUpOtherLow(obj.description);
}

normalObj(lesson);
console.log(lesson);





