function init(){
    value = 0;
    readings = [];
}

function makeNumber(e){
    value = value*10 + parseInt(e.target.textContent);
    display.textContent = value;
}

const numBtns = Array.from(document.querySelectorAll('#num'));
const optBtns = Array.from(document.querySelectorAll('#opt'));
const allClear = document.querySelector('#AC');
const negate = document.querySelector('#negate');
const delBtn = document.querySelector('#del');
const display = document.querySelector('.display');
const decimal = document.querySelector('#point');

for(let i=0; i<10; i++){
    numBtns[i].addEventListener('click', makeNumber);
};

// for(let i=0; i<4; i++){
//     optBtns.addEventListener('click',)
// }

init();