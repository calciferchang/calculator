// Recognize inputs & what to do with them
const buttons = document.querySelectorAll(".button");
const NUM1Display = document.querySelector("#num1");
const NUM2Display = document.querySelector("#num2");
const OPERATORDisplay = document.querySelector("#operator");

function handleInput(input) {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(input)) {
    console.log(input);
    return addDigit(input);
  }
  if (["-", "/", "*", "+"].includes(input)) {
    return useOperator(input);
  }
  if (input === ".") {
    return addDecimal();
  }
  if (input === "Enter") {
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
    console.log("no 0 at start");
    return;
  }
  currentInput.value += input;
  updateDisplay(input);
}

function addDecimal() {
  //if hasDecimal true, do not run
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
  } else if (!NUM1.value) {
    NUM1.value = 0;
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
  //look at operator
  //choose which function to put numbers in based off operator
  //put result into NUM1, reset operator and NUM2
  //set current input to NUM1
}
// First run
let currentInput = NUM1;
NUM1Display.innerText = "0";
