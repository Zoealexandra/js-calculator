//defining the display screen
//var box = document.getElementById('display');

//adding the button value to the display screen
function toScreen(x){
  let box = document.getElementById('display');
  
  //if user selects ac, the display value will be empty
  if (x === 'ac') {
      box.value = '';
      //else if they select equals, the equation will be evaluated
  } else if (x === '='){
    x = box.value;
    x = eval(x);
    box.value = x;
    //otherwise enter the symbol entered
  } else {
    box.value += x;
  }
}

//when the user selects the equals button, the string in the display box will be evaluated
/*function equals() {
  let box = document.getElementById('display');
  x = box.value;
  x = eval(x);
  box.value = x;
}*/

//when x^2 is selected, the display screen will show the result
function power() {
  let box = document.getElementById('display');
  x = box.value;
  x *= x;
  box.value = x;
}

//when CE is selected, the last entry will be removed
function backspace () {
  let box = document.getElementById('display');
  var num = box.value;
  var length = num.length-1;
  var newNum = num.substring(0,length);
  box.value = newNum;
}
