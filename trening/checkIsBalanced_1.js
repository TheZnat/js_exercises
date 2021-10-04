let checkIsBalanced = (expression) => {
    let stack = [];
    for ( let symbol of expression){
        if (symbol === '('){
            stack.push(symbol);
        } else if (symbol === ')') {
            stack.pop();
        }
    }
    if( stack.length === 0){
        return true;
    } else {
        return false;
    }

}

console.log(checkIsBalanced('(, ((), )('));