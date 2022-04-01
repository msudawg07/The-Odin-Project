let titles = function(array){
    return array.map((object) => {
      return object.title;
  }
  )
}



// new version 

function titleDis(array){
  titles = [];
  for ( let i = 0; i < array.length; i++){
    titles[i] = array[i].title;
 }return titles;
}
