var result;

function chooseMathFunc(numX,numY, choice) {
  if(isNaN(numX) || isNaN(numY)) {
    result = "Give me an input value";
    return result;
  }
  if (choice == "add") {
    result = numX + numY;
  } else if (choice == "subtract") {
    result = numX - numY;
  } else if ( choice == "multiply") {
    result = numX * numY;
  } else if ( choice == "divide") {
    result = numX/numY;
  } else {
    result = numX%numY;
  }
  return result;
}

function buttonPushed() {
    var choice = document.getElementById("select-function").value;
  var numX = parseFloat(document.getElementById("numX").value);
  var numY = parseFloat(document.getElementById("numY").value);
  
  chooseMathFunc(numX, numY, choice);
  document.getElementById("result").innerHTML = result;
}