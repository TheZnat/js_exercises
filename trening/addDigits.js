let addDigits = (num) => {
    let result = num;
    while (result >= 10){
        result = sumFunction(String(result));
    }
    return result;
}

let sumFunction = (str) =>{
    let result = 0;
    for ( let i = 0; i < str.length; i++){
        result += Number(str[i]);
    }
    return result;
}

//addDigits.js
// Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
//
// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.