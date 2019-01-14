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
    //console.log(i);
    if(i === 1){
      array[i] = "I am 1 strange loop.";
    }else{
      array[i] = "I am ${i} strange loops";
    }
    //array[i] = "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.";
      console.console.log(array[i]);
  }
}
