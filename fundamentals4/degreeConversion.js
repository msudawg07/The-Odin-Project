// To Celsius:

function toCelsius(num){
    if(!isNaN(num)){
    let result = (num - 32) * (5/9);
    console.log(result.toFixed(1));
}
}


//to Fahrenheit
function toFahren(num){
    if(!isNaN(num)){
    let result = (num * 9/5) + 32;
    console.log(result.toFixed(1));
}
}
