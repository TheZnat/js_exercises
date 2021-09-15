//Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов,
// у которых такая же чётность, как и у первого элемента входного массива. Создать тест для проверки функции

let getSameParity = (array) =>{
    if (array.length === 0) {
        return [];
    }
    let firstElementRemains = array[0] % 2 ;
    let arrayNew = [];
    for ( let item of array){
        if (item % 2 === firstElementRemains){
            arrayNew.push(item);
        }
    }
    return arrayNew;
}

let checkingSetValues = (a1, a2) =>{
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])

}

let TestSolution_1 = [];
let TestSolution_2 = [1, 3];
let TestSolution_3 = [1];
let TestSolution_4 = [2, 2, 8];

let TestArrayValues1 = [];
let TestArrayValues2 = [1, 2, 3];
let TestArrayValues3 = [1, 2, 8];
let TestArrayValues4 = [2, 2, 8];


let tempArray =[];
let TestArrayIncoming =[TestArrayValues1,TestArrayValues2,TestArrayValues3,TestArrayValues4 ]
let TestArrayOutput = [TestSolution_1,TestSolution_2,TestSolution_3,TestSolution_4];

for (let i = 0; i < 4; i++){
    tempArray = getSameParity(TestArrayIncoming[i]);
    console.log(tempArray);
    console.log(TestArrayOutput[i]);
    console.log(checkingSetValues(TestArrayOutput[i], tempArray));
    tempArray.splice(0,tempArray.length);
}