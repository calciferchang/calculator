// Recognize inputs & what to do with them
document.addEventListener("keydown", (event) => {
  handleInput(event.key);
});

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    handleInput(value);
  });
});

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
  } else currentInput.value = currentInput.value + input;
}

function addDecimal() {
  //if hasDecimal true, do not run
  if (currentInput.hasDecimal) {
    return;
  }
  if (!currentInput.value) {
    currentInput.hasDecimal = true;
    currentInput.value = "0.";
  } else {
    currentInput.value = currentInput.value + ".";
    currentInput.hasDecimal = true;
  }
}
function useOperator() {
  if (NUM2.value) {
    runCalculator();
  }
  //set operator
  //set currentinput to num2
}
function clearInputs() {
  //reset NUM1
  //reset NUM2
  //reset operator
  //set currentinput to NUM1
}

function runCalculator() {
  //look at operator
  //choose which function to put numbers in based off operator
  //put result into NUM1, reset operator and NUM2
  //set current input to NUM1
}
// First run
let currentInput = NUM1;
