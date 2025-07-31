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

const STATES = {
  EXPECTING_FIRST_NUMBER: "expecting_first_number",
  EXPECTING_OPERATOR: "expecting_operator",
  EXPECTING_SECOND_NUMBER: "expecting_second_number",
};

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
      return "CLEAR";
    case "Backspace":
      return "BACKSPACE";
    default:
      return "walrus sucks";
  }
}

let calculatorState = {
  currentState: STATES.EXPECTING_FIRST_NUMBER,
  firstNumber: "",
  operator: null,
  secondNumber: "",
  display: "0",
};
