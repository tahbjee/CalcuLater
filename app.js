const userInput = document.querySelector(".user-input");
<<<<<<< HEAD
const allButton = document.querySelectorAll(".number");
const allOperators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");

let firstNumber = "";
let secondNumber = "";
let operator = "";

const operate = (num1, operator, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "÷":
      return num1 / num2;

    case "x":
      return num1 * num2;

    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "^":
      return num1 ** num2;

    case "%":
      return (num1 / 100) * num2;

    default:
      return "error";
  }
};

allButton.forEach((button) => {
  button.addEventListener("click", () => {
    userInput.value += button.textContent;
    button.classList.add("animateOnClick");
  });
});

allOperators.forEach((button) => {
=======
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let operator = "";
let secondNumber = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    userInput.value += button.textContent;
  });
});

operatorButtons.forEach((button) => {
>>>>>>> 9e0029fad281025dfb134cdc9b79dd2459a8a3ce
  button.addEventListener("click", () => {
    if (firstNumber === "") {
      firstNumber = userInput.value;
      operator = button.textContent;
      userInput.value = "";
    } else {
      firstNumber = operate(firstNumber, operator, userInput.value);
      operator = button.textContent;
      userInput.value = "";
    }
<<<<<<< HEAD
    button.classList.add("animateOnClick");
  });
});

equalButton.addEventListener("click", () => {
=======
  });
});

equalsButton.addEventListener("click", () => {
>>>>>>> 9e0029fad281025dfb134cdc9b79dd2459a8a3ce
  if (firstNumber !== "" && operator !== "" && userInput.value !== "") {
    secondNumber = userInput.value;
    const result = operate(firstNumber, operator, secondNumber);
    userInput.value = result;

    firstNumber = "";
    operator = "";
    secondNumber = "";
  }
<<<<<<< HEAD
  equalButton.classList.add("animateOnClick");
=======
>>>>>>> 9e0029fad281025dfb134cdc9b79dd2459a8a3ce
});

clearButton.addEventListener("click", () => {
  userInput.value = "";
<<<<<<< HEAD
  firstNumber = "";
  operator = "";
  secondNumber = "";
  clearButton.classList.add("animateOnClick");
});
=======

  firstNumber = "";
  operator = "";
  secondNumber = "";
});

function operate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;

    default:
      return "Error";
  }
}
>>>>>>> 9e0029fad281025dfb134cdc9b79dd2459a8a3ce
