function init(){
    value = 0;
    readings = [];
    operations = [];
}

function makeNumber(e){
    if(operations.length !== 0){
        value = 0;
    }
    value = value*10 + parseInt(e.target.textContent);
    display.textContent += value;
}

function giveAns(readings, operations){
    const numOne = readings[0];
    const numTwo = readings[1];
    if(operations[0] === '+'){
        return numOne + numTwo;
    }
    else if(operations[0] === '-'){
        return numOne - numTwo;
    }
    else if(operations[0] === '×'){
        return numOne * numTwo;
    }
    else if(operations[0] === '÷'){
        return numOne / numTwo;
    }
}

function operate(e){
    display.textContent += e.target.textContent;
    if(operations.length === 0){
        readings[0] = value;
        operations[0] = e.target.textContent;
    }
    else{
        readings[1] = value;
        const applyOpt = giveAns(readings, operations);
        readings = [];
        operations = [];
        readings[0] = applyOpt;
    }
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

for(let i=0; i<4; i++){
    optBtns[i].addEventListener('click', operate);
}

init();