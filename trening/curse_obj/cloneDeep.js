const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

let  cloneDeep =  (obj) => {
    const pull = new Map; // тут храними клоны которые уже создали
    const clone = cloneDeepMaster(obj);

    pull.clear();
    return clone;

function cloneDeepMaster (obj) {
        if (typeof obj === 'object' || obj === null) {
            return obj;
        }

        if (obj instanceof Array){ // логика обработки массива
            const clone = [];
            pull.set(obj, clone); // если в объекте есть зацикливания то в объекте уже есть клон
            for (let i = 0; i < obj.length; i++){
                if (pull.has(obj[i])){ // если объект уже клонировали
                    clone.push(pull.get(obj[i])); // сслыка на этот объект
                } else { // если приметив, то возрващаем его же
                    clone.push(cloneDeepMaster(obj[i]));
                }
            }
            return clone;

        } else { // логика обработки объекта
            const clone = {}
            pull.set(obj, clone)
            // если есть уже похожий клон, то не создаем новый, а просто добавляем его из pull
            for ( const key in obj ) {
                // если объект уже клонирован, то просто присвоеваем ссылку на него
                if (pull.has(obj[key])){
                    clone[key] = pull.get(obj[key]);
                }else {
                    // если объект примитив, то просто добавляем его в клон, а если нет то создаем его массив и добавляем
                    clone[key] = cloneDeepMaster(obj[key])
                }
            }
            return  clone
        }
    }
}

// let clone = cloneDeep(data);
// console.log(data);
// console.log(clone);
