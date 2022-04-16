function init(){
    value = 0;
    readings = [];
    operations = [];
    display.textContent = '';
    deciPressed = false;
}

function makeNumber(e){
    if(deciPressed === false){
        value = value*10 + parseInt(e.target.textContent);
    }
    else{
        count++;
        value = (value*(10**count)) + parseInt(e.target.textContent);
        value /= (10 ** count);
    }
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
        if(deciPressed === true){
            deciPressed = false;
        }
        if(readings.length === 0){
            readings[0] = value;
            operations[0] = e.target.textContent;
        }
        else{
            operations[0] = e.target.textContent;
        }
        value = 0;
    }
    else{
        if(deciPressed === true){
            deciPressed = false;
        }
        readings[1] = value;
        const applyOpt = giveAns(readings, operations);
        readings = [];
        operations = [];
        readings[0] = applyOpt;
        operations[0] = e.target.textContent;
        display.textContent = applyOpt;
        display.textContent += e.target.textContent;
        value = 0;
    }
    console.log(readings);
    console.log(operations);
}

function equate(){
    if(operations.length === 0){
        readings[0] = value;
        display.textContent = value;
    }
    else{
        readings[1] = value;
        const getResult = giveAns(readings, operations);
        readings = [];
        operations = [];
        readings[0] = getResult;
        display.textContent = getResult;
    }
    
    console.log(readings);
    console.log(operations);
}

function changeSign(){
    value = value * -1;
    display.textContent = value;
    console.log(readings);
    console.log(operations);
}

function deleteDigit(){
    value = Math.trunc(value / 10);
    display.textContent = value;
}

function addDecimal(){
    deciPressed = true;
    count = 0;
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
allClear.addEventListener('click', init);
delBtn.addEventListener('click', deleteDigit);
decimal.addEventListener('click', addDecimal);

init();