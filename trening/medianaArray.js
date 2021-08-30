let usersByDay = [1, 2, 44, 3, 5, 16];
console.log(usersByDay);
let median;
if (usersByDay.length % 2 !== 0) {
    let medianIndex = (usersByDay.length - 1) / 2;
    median = usersByDay[medianIndex];
} else {
    let leftIndex = usersByDay.length / 2 - 1;
    let rightIndex = usersByDay.length / 2;
    median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}
console.log(`Медиана массива ${median}`);