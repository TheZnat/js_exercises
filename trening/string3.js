//Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих
// уникальных значений в обоих массивах.
// Примеры:
// // Общие повторяющиеся элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
//
// // Общие повторяющиеся элементы: 4
// getSameCount([1, 4, 4], [4, 8, 4]); // 1
//
// // Общие повторяющиеся элементы: 1, 10
// getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
//
// // Нет элементов
// getSameCount([], []); // 0


let getSameCount = (arrayFirst, arraySecond) => {
    let newArray = [];

    for (let itemArrayFirst of arrayFirst) {
        for (let itemArraySecond of arraySecond) {
            if (itemArrayFirst === itemArraySecond) {
                newArray.push(itemArraySecond);
            }
        }
    }
    let result = Array.from(new Set(newArray));
    return result.length;
}

console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3
console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2
console.log(getSameCount([], [])); // 0