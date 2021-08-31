let num = 5;
let facorial = (n) => {
    if (n == 1){
        return 1;
    }
    return n * facorial(n - 1);
}

console.log(`Факториал числа ${num} \n${facorial(num)}\n`);


let fibonacci = (n) => {
    if (n == 1 || n == 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Число фибаначи ${num} \n${fibonacci(num)}`);