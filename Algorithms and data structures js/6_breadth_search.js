// Поиск в ширину в графе

const graph ={}
graph.a =['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];


let breadthSearch = (graph, start, end) => {
    let queue = [];
    queue.push(start);
    while (queue.length > 0){
        let current = queue.shift(); //Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
        if (!graph[current]){
            graph[current] = [];
        }
        if (graph[current].includes(end)){ // пределяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
}

console.log(breadthSearch(graph,'a', 'g'));