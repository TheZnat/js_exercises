let isValid = (expression) =>{
    let stack = [];
    let brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for ( let i = 0; i < expression.length; i++ ) {
        let current = expression[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop())
                return false;
        } else {
            stack.push(current);

        }
    }
    return  stack.length === 0;
}
let isClosedBracket = (expression) => {
    return [')', '}', ']'].indexOf(expression) > - 1;
}

console.log(isValid('(())'));
console.log(isValid('((())'));
