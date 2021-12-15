function leapYear(num){
    if(num % 4 == 0 && num % 400 == 0){
        return true;
    }else return false;
}
