function doWhileLoop(array){
  for(var i = array.length;i>0;i--){
    array.pop();
  }
  return array;
}
function whileLoop(n){
  while (n >= 0) {
    n--;
  }
  return 'done';
}
function forLoop(){
  var array = [];
  for(var i=0;i<25;i++){
    array[i] = "test";
    console.log(i);
    //array[i] = "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.";

  }
}
