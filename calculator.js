// Recognize inputs & what to do with them
const buttons = document.querySelectorAll(".button");
const NUM1Display = document.querySelector("#num1");
const NUM2Display = document.querySelector("#num2");
const OPERATORDisplay = document.querySelector("#operator");

function handleInput(input) {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(input)) {
    return addDigit(input);
  }
  if (["-", "/", "*", "+"].includes(input)) {
    return useOperator(input);
  }
  if (input === ".") {
    return addDecimal();
  }
  if (input.toLowerCase() === "enter") {
    return runCalculator();
  }
  if (input === "clear") {
    return clearInputs();
  }
}

document.addEventListener("keydown", (event) => {
  handleInput(event.key);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    handleInput(value);
  });
});

function updateDisplay(input) {
  if (currentInput === NUM1) {
    NUM1Display.innerText = NUM1.value;
  } else if (currentInput === NUM2) {
    NUM2Display.innerText = NUM2.value;
  }
}

// Declare the calculator constants
const NUM1 = {
  value: "",
  hasDecimal: false,
};
const NUM2 = {
  value: "",
  hasDecimal: false,
};
let operator = "";

//calculator functions
function addDigit(input) {
  if (input === "0" && !currentInput.value) {
    return;
  }
  currentInput.value += input;
  updateDisplay(input);
}

function addDecimal() {
  if (currentInput.hasDecimal) {
    return;
  }
  if (!currentInput.value) {
    currentInput.hasDecimal = true;
    currentInput.value = "0.";
    updateDisplay(currentInput.value);
  } else {
    currentInput.value += ".";
    currentInput.hasDecimal = true;
    updateDisplay(currentInput.value);
  }
}

function useOperator(input) {
  if (NUM1.value[NUM1.value.length - 1] === ".") {
    NUM1.value = NUM1.value.slice(0, -1);
    NUM1Display.innerText = NUM1.value;
  }
  if (NUM2.value) {
    runCalculator();
    NUM1.value = NUM1Display.innerText;
  } else if (!NUM1.value) {
    NUM1.value = NUM1Display.innerHTML;
  }
  operator = input;
  OPERATORDisplay.innerText = operator;
  currentInput = NUM2;
}

function clearInputs() {
  NUM1.value = "";
  NUM2.value = "";
  NUM1.hasDecimal = false;
  NUM2.hasDecimal = false;
  operator = "";
  currentInput = NUM1;
  NUM1Display.innerText = "0";
  NUM2Display.innerText = "";
  OPERATORDisplay.innerText = "";
}

function runCalculator() {
  const firstNumber = parseFloat(NUM1.value);
  if (!NUM2.value) {
    clearInputs();
    NUM1Display.innerText = firstNumber;
    return;
  }
  const secondNumber = parseFloat(NUM2.value);
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("Invalid operator");
      result = 0;
      break;
  }
  clearInputs();
  NUM1Display.innerText = parseFloat(result.toFixed(2));
}

// First run
let currentInput = NUM1;
NUM1Display.innerText = "0";
