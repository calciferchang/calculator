// Button functions
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    const type = inputType(value);
    handleInput(type, value);
  });
});

// Display
const calcDisplay = document.querySelector("#display");
const displayFirstNum = document.createElement("div");
displayFirstNum.className = "displayNum";
displayFirstNum.innerText = "0";

calcDisplay.appendChild(displayFirstNum);

//defining calculator states
const STATES = {
  EXPECTING_FIRST_NUMBER: "expecting_first_number",
  EXPECTING_OPERATOR: "expecting_operator",
  EXPECTING_SECOND_NUMBER: "expecting_second_number",
};

let calculatorState = {
  currentState: STATES.EXPECTING_FIRST_NUMBER,
  firstNumber: "",
  operator: null,
  secondNumber: "",
  hasDecimal: false,
};

// functions for operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inputType(input) {
  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return "DIGIT";
    case "*":
    case "/":
    case "-":
    case "+":
      return "OPERATOR";
    case ".":
      return "DECIMAL";
    case "Enter":
    case "=":
      return "ENTER";
    case "Escape":
    case "clear":
      return "CLEAR";
    case "Backspace":
      return "BACKSPACE";
    default:
      return "walrus sucks";
  }
}

function clearInput() {
  calculatorState.currentState = STATES.EXPECTING_FIRST_NUMBER;
  calculatorState.firstNumber = "";
  calculatorState.operator = null;
  calculatorState.secondNumber = "";
  calculatorState.hasDecimal = false;
  displayFirstNum.innerText = "0";
}

function handleInput(inputType, inputValue) {
  if (inputValue === "clear") {
    clearInput();
  } else
    switch (calculatorState.currentState) {
      case STATES.EXPECTING_FIRST_NUMBER:
        switch (inputType) {
          case "DIGIT":
            calculatorState.firstNumber =
              calculatorState.firstNumber + inputValue;
            displayFirstNum.innerText = calculatorState.firstNumber;
            break;

          case "DECIMAL":
            if (calculatorState.hasDecimal === false) {
              calculatorState.firstNumber = calculatorState.firstNumber + ".";
              calculatorState.hasDecimal = true;
              displayFirstNum.innerText = calculatorState.firstNumber;
            }
            break;

          case "BACKSPACE":
            const splitNum = calculatorState.firstNumber.split("");
            if (splitNum[splitNum.length - 1] === ".") {
              calculatorState.hasDecimal = false;
            }
            splitNum.pop();

            calculatorState.firstNumber = splitNum.join("");
            displayFirstNum.innerText = calculatorState.firstNumber;
            break;

          case "OPERATOR":
            calculatorState.currentState = STATES.EXPECTING_OPERATOR;
            calculatorState.hasDecimal = false;
            calculatorState.operator = inputValue;

            const displayOperator = document.createElement("div");
            displayOperator.innerText = calculatorState.operator;
            calcDisplay.appendChild(displayOperator);
            break;
        }
        break;
      case STATES.EXPECTING_SECOND_NUMBER:
        // State transitions for this state
        break;
    }
}
