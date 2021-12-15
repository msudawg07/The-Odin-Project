//This repeats "x" x num times, but not into one string. 
//function repeatString(x, num){   
//    for(let i = 0; i < num; i++){         
//        console.log(x);
//    }
//}

// This is correct
let string = " ";
function repeatStr(x, num){   
    for(let i = 0; i < num; i++){
        string += x;
    }
    console.log(string);
}
