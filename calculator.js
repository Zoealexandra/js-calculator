//defining the display screen
//var box = document.getElementById('display');

//adding the button value to the display screen
function toScreen(x){
  let box = document.getElementById('display');
  
      box.value += x;
  //if user selects c, the display value will be empty
  if (x === 'ac') {
      box.value = '';
  }
}

//when the user selects the equals button, the string in the display box willbe evaluated
function equals() {
  let box = document.getElementById('display');
  x = box.value;
  x = eval(x);
  box.value = x;
}

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
