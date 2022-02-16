let key = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');
let enter = document.querySelector('.enter')
let tempString = '';

for (let item of key){
    item.onclick = function(){
        if( item.textContent === backspace.textContent){
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (item.textContent === enter.textContent ){
            display.textContent += '\n';
        }
        else {
            display.textContent += item.textContent;
        }


    }
}



clear .onclick = function(evt){
    evt.preventDefault();
    display.textContent ='';
}
