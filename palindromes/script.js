const palindrome = function(x){
  if(x.split('').reverse().join('') == x){
    return true;
  }else{
    return false;
  }
}
