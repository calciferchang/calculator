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
const INPUT_STATES = {
  FIRST_NUMBER: "first_number",
  OPERATOR: "operator",
  SECOND_NUMBER: "second_number",
};

const CALCULATOR_STATE = {
  currentInput: INPUT_STATES.FIRST_NUMBER,
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
  CALCULATOR_STATE.currentInput = INPUT_STATES.FIRST_NUMBER;
  CALCULATOR_STATE.firstNumber = "";
  CALCULATOR_STATE.operator = null;
  CALCULATOR_STATE.secondNumber = "";
  CALCULATOR_STATE.hasDecimal = false;
  displayFirstNum.innerText = "0";
}

function handleInput(inputType, inputValue) {
  if (inputValue === "clear") {
    clearInput();
  } else
    switch (CALCULATOR_STATE.currentInput) {
      case INPUT_STATES.FIRST_NUMBER:
        switch (inputType) {
          case "DIGIT":
            CALCULATOR_STATE.firstNumber =
              CALCULATOR_STATE.firstNumber + inputValue;
            displayFirstNum.innerText = CALCULATOR_STATE.firstNumber;
            break;

          case "DECIMAL":
            if (CALCULATOR_STATE.hasDecimal === false) {
              CALCULATOR_STATE.firstNumber = CALCULATOR_STATE.firstNumber + ".";
              CALCULATOR_STATE.hasDecimal = true;
              displayFirstNum.innerText = CALCULATOR_STATE.firstNumber;
            }
            break;

          case "BACKSPACE":
            const splitNum = CALCULATOR_STATE.firstNumber.split("");
            if (splitNum[splitNum.length - 1] === ".") {
              CALCULATOR_STATE.hasDecimal = false;
            }
            splitNum.pop();

            CALCULATOR_STATE.firstNumber = splitNum.join("");
            displayFirstNum.innerText = CALCULATOR_STATE.firstNumber;
            break;

          case "OPERATOR":
            CALCULATOR_STATE.currentState = INPUT_STATES.OPERATOR;
            CALCULATOR_STATE.hasDecimal = false;
            CALCULATOR_STATE.operator = inputValue;

            const displayOperator = document.createElement("div");
            displayOperator.innerText = CALCULATOR_STATE.operator;
            calcDisplay.appendChild(displayOperator);
            break;
        }
        break;

      case INPUT_STATES.SECOND_NUMBER:
        switch (inputType) {
          case "DIGIT":
            CALCULATOR_STATE.secondNumber =
              CALCULATOR_STATE.secondNumber + inputValue;
            displaySecondNum.innerText = CALCULATOR_STATE.secondNumber;
            break;

          case "DECIMAL":
            if (CALCULATOR_STATE.hasDecimal === false) {
              CALCULATOR_STATE.firstNumber = CALCULATOR_STATE.firstNumber + ".";
              CALCULATOR_STATE.hasDecimal = true;
              displayFirstNum.innerText = CALCULATOR_STATE.firstNumber;
            }
            break;

          case "BACKSPACE":
            const splitNum = CALCULATOR_STATE.firstNumber.split("");
            if (splitNum[splitNum.length - 1] === ".") {
              CALCULATOR_STATE.hasDecimal = false;
            }
            splitNum.pop();

            CALCULATOR_STATE.firstNumber = splitNum.join("");
            displayFirstNum.innerText = CALCULATOR_STATE.firstNumber;
            break;

          case "OPERATOR":
            CALCULATOR_STATE.currentState = STATES.EXPECTING_OPERATOR;
            CALCULATOR_STATE.hasDecimal = false;
            CALCULATOR_STATE.operator = inputValue;

            const displayOperator = document.createElement("div");
            displayOperator.innerText = CALCULATOR_STATE.operator;
            calcDisplay.appendChild(displayOperator);
            break;
        }
        break;
    }
}
