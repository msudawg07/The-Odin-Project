let value;
let value1;
let value2;
let opStore;
let screen = document.querySelector('#screen')
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operator');


for(let number of numbers){
number.addEventListener('click', () => {
 value = screen.innerText += number.innerText;
  // console.log("value: " + value)
})
}


for(let operator of operators){
   operator.addEventListener('click', () => {
     value1 = value;
     // console.log("Value 1: " + value1)
     if(value1 && value2){
       console.log("value 1: " + value1)
        screen.innerText = operate(opStore, value1, value2);
        value1 = screen.innerText;
        opStore = operator.innerText;
        console.log(opStore);
        screen.innerText = '';
        value2 = value1;
        // console.log("value 2 second time: " + value2)
      }
      else if(value1){
        opStore = operator.innerText;
        console.log(opStore)
        screen.innerText = '';
        value2 = value1;
        // console.log("value 2 if value 1: " + value2)
      }
   })
 }

 document.querySelector('.equals').addEventListener('click', () => {
   if(value1 && value2){
     screen.innerText = operate(opStore, value, value2);
     // console.log(screen.innerText);
   }
})


document.querySelector('.clear').addEventListener('click', () => {
  screen.innerText = '';
  value = '';
  value1 = '';
  value2 = '';
  opStore = '';
  // window.location.reload();
})

document.querySelector('.delete').addEventListener('click', () => {
  screen.innerText = screen.innerText.slice(0, -1);
})


function operate(operator, x, y){
  if(operator == '+'){
    return add(x, y)
  }else if(operator == '-'){
    return subtract(y, x)
  }else if(operator == 'x'){
    return multiply(x, y)
  }else if(operator == '÷'){
    return divide(x, y)
  }
}

function add(x, y){
  return Number(x) + Number(y);
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x, y){
  return x / y;
}
