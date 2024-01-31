const userInput = document.querySelector(".user-input");
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
    button.classList.add("animateOnClick");
  });
});

equalButton.addEventListener("click", () => {
  if (firstNumber !== "" && operator !== "" && userInput.value !== "") {
    secondNumber = userInput.value;
    const result = operate(firstNumber, operator, secondNumber);
    userInput.value = result;

    firstNumber = "";
    operator = "";
    secondNumber = "";
  }
  equalButton.classList.add("animateOnClick");
});

clearButton.addEventListener("click", () => {
  userInput.value = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  clearButton.classList.add("animateOnClick");
});
