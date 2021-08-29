let solution = (str) => {
    let newStr ='';
    for( let i = 0; i < str.length; i++){
        if (str[i - 1] == 0 || str[i - 1] === undefined) {
            newStr += str[i].toUpperCase()
        } else newStr += str[i];
    }
    return newStr;
}
console.log(solution('фак де  джееес'));