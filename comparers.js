const bigLettersCount = (str) => {
    let temp = str.toUpperCase();
    let count = 0;
    for ( let i = 0; i < str.length; i++){
        if(temp[i] === str[i]){
            count++;
        }
    }
    return count;
};

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);
    if (firstCount > secondCount) {
        return 1;
    } else {
        return -1;
    }
    return 0;

};

const greaterThan = (first, second) => (
    compare(first, second) === 1);
const lessThan = (first, second) => (
    compare(first, second) === -1);
const isEqual = (first, second) => (
    compare(first, second) === 0);

console.log(greaterThan('AD', 'ad sd')); // true, сравнение на > (больше)
console.log(greaterThan('AD', '   Ad sd')); // false, сравнение на > (больше)
console.log(lessThan('ghe df', 'dfwe r D')); // true, сравнение на < (меньше)
console.log(isEqual('liSp', 'lisP')); // true


