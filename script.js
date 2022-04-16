function init(){
    value = 0;
    readings = [];
    operations = [];
}

function makeNumber(e){
    value = value*10 + parseInt(e.target.textContent);
    display.textContent = value;
    console.log(value);
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
        if(readings.length === 0){
            readings[0] = value;
            operations[0] = e.target.textContent;
        }
        else{
            operations[0] = e.target.textContent;
        }
    }
    else{
        readings[1] = value;
        const applyOpt = giveAns(readings, operations);
        readings = [];
        operations = [];
        readings[0] = applyOpt;
        operations[0] = e.target.textContent;
        display.textContent = applyOpt;
        display.textContent += e.target.textContent;
    }
    value = 0;
}

function equate(){
    readings[1] = value;
    const getResult = giveAns(readings, operations);
    readings = [];
    operations = [];
    readings[0] = getResult;
    display.textContent = getResult;
}

const numBtns = Array.from(document.querySelectorAll('#num'));
const optBtns = Array.from(document.querySelectorAll('#opt'));
const allClear = document.querySelector('#AC');
const negate = document.querySelector('#negate');
const delBtn = document.querySelector('#del');
const display = document.querySelector('.display');
const decimal = document.querySelector('#point');
const equalToBtn = document.querySelector('#equal');

for(let i=0; i<10; i++){
    numBtns[i].addEventListener('click', makeNumber);
};

for(let i=0; i<4; i++){
    optBtns[i].addEventListener('click', operate);
}

equalToBtn.addEventListener('click', equate);
negate.addEventListener('click', changeSign);

init();