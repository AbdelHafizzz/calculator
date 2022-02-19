var keyboard = document.getElementById("keyboard");
var result = document.getElementById("result");

var buttons = keyboard.children;

var arrayButtons = [...buttons];

var operations = ["-", "+", "*", "/", "=", "%", "del", "C", "^2"];

var firstNumber = "";
var operation = "";
var secondNumber = "";
var totalString = "";
var total = 0;

arrayButtons.forEach((btn) => {
  var buttonText = btn.innerText;

  btn.addEventListener("click", () => {
    if (operations.includes(buttonText)) {
      //operation
      if (buttonText == "C") {
        //clear all
        result.innerHTML = 0;
        firstNumber = "";
        secondNumber = "";
        operation = "";
      } else if (buttonText == "del") {
        //delete last number
        var displayedNumber = result.innerHTML;
        var length = displayedNumber.length;
        var newNumber = displayedNumber.substring(0, length - 1);
        result.innerHTML = newNumber;

        if (operation == "") {
          firstNumber = newNumber;
        } else {
          secondNumber = newNumber;
        }
      } else if (buttonText == "=") {
        //equal
        if (firstNumber != "" && operation != "" && secondNumber != "") {
          totalString = firstNumber + operation + secondNumber; //3+4
          total = eval(totalString); //7
          result.innerHTML = total;
          firstNumber = total;
          secondNumber = "";
          operation = "";
        }
      } else if (buttonText == "^2") {
        //power 2 (number*number)
        if (operation == "") {
          firstNumber = firstNumber * firstNumber;
          result.innerHTML = firstNumber;
        } else {
          secondNumber = secondNumber * secondNumber;
          result.innerHTML = secondNumber;
        }
      } else {
        //operation 3adiyye
        operation = buttonText;
      }
    } else {
      //ra2em
      if (operation == "") {
        firstNumber += buttonText.toString();
        result.innerHTML = firstNumber;
      } else {
        secondNumber += buttonText.toString();
        result.innerHTML = secondNumber;
      }
    }
  });
});
