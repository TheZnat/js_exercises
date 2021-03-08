function fun(num){
    for (let i = 0; i <= num; i++){
        switch (i){
            case 5:
                console.log("Пять");
                break;
            case 13:
                console.log("Тринадцать");
                break;
            case 22:
                console.log("Двадцать два");
                break;
            case 35:
                console.log("тридацать пять");
                break;
            case 98:
                console.log("девяносто восемь");
                break;
            default:
                console.log(i);
                break;
        }
    }
}
fun(102);
