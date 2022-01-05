const numbers = [1, 4, 9, 16]

function addNumbers(x, y){
  return x + y;
}

function subtractNumber(x, y){
  return x - y;
}

function sumNumbers(array){
  let sumM = array.reduce((num1, num2) => num1 + num2, 0
    );
  console.log(sumM)
}

// function multiply(x, y){
//   return x * y;
// }

function getPower(x, y){
  return Math.pow(x, y);
}

let facNum = 1;
function factorial(x){
  for(let i = 1; i <= x; i++){
    facNum *= i;
    }
    return facNum
};

function multNumbers(array){
  let multM = array.reduce((num1, num2) => num1 * num2
    );
  return multM
}

