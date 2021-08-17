let poly = 5005;
let ylop = 0;
let isPalindrome = false;

let temp = 1;
let tmp = poly;
let count = 0;

while (Math.round(poly / temp) > 1){
    temp *= 10;
    count++;
}
for (let i = count - 1; i >= 0; i-- ) {
    ylop += (poly % 10) * Math.pow(10, i);
    poly = Math.floor(poly / 10);
}

if (tmp === ylop) {
    isPalindrome = true;
}
console.log('Чило Палиндром ?')
console.log(isPalindrome);
console.log(tmp);
console.log(ylop);