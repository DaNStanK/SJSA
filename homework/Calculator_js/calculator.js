const number1 = prompt("Enter a number: ");
if (!Number(number1)) {
  console.log("You have not entered a valid number!")
}

const number2 = prompt("Enter a second number: ");
if (!Number(number2)) {
  console.log("You have not entered a valid number!")
}

const operator = prompt("Enter one of the following operators: +, -, *, /, %");
if (!operator ) {
  console.log("You have not entered a valid operator!")
}

switch (operator) {
  case "+": {
    if (operator === "+") {
      console.log("The sum of the entered numbers is " + (Number(number1) + Number(number2)));
      break;
    }
  }
  case "-": {
    if (operator === "-") {
      console.log("The subtraction of the entered numbers is " + (Number(number1) - Number(number2)));
      break;
    }
  }
  case "/": {
    if (operator === "/") {
      console.log("The division of the entered numbers is " + (Number(number1) / Number(number2)));
      break;
    }
  }
  case "*": {
    if (operator === "*") {
      console.log("The multiplications of the entered numbers is " + (Number(number1) * Number(number2)));
      break;
    }
  }
  case "%": {
    if (operator === "%") {
      console.log("The modulo of the entered numbers is " + (Number(number1) % Number(number2)));
      break;
    }
  }
  default: {
    console.log("You didn't enter valid numbers or operator.")
    break;
  }
}