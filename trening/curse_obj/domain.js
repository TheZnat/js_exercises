//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:
//Если домен передан без указания протокола,
//то по умолчанию берется http

let getDomainInfo = (str) =>{
    let scheme = '';
    let name = '';
    let arrayStr = str.split('://');

    if (arrayStr.length === 1){
        scheme = `http`;
        name = `${arrayStr[0]}`;
    } else {
        scheme = `${arrayStr[0]}`;
        name = `${arrayStr[1]}`;
    }
    return { scheme, name };
}

console.log(getDomainInfo('yandex.ru'));
console.log(getDomainInfo('https://hexlet.io'));