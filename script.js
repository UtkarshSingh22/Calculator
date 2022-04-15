function init(){
    value = 0;
    readings = [];
}

const numBtns = document.querySelectorAll('#num');
const optBtns = document.querySelectorAll('#opt');
const allClear = document.querySelector('#AC');
const negate = document.querySelector('#negate');
const delBtn = document.querySelector('#del');
const display = document.querySelector('.display');
const decimal = document.querySelector('#point');

init();