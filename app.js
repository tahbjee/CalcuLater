const userInput = document.querySelector(".user-input");
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
  });
});

equalsButton.addEventListener("click", () => {
  if (firstNumber !== "" && operator !== "" && userInput.value !== "") {
    secondNumber = userInput.value;
    const result = operate(firstNumber, operator, secondNumber);
    userInput.value = result;

    firstNumber = "";
    operator = "";
    secondNumber = "";
  }
});

clearButton.addEventListener("click", () => {
  userInput.value = "";

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
