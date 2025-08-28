// Handle inputs
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

function clearInputs() {}
function addDigit() {}
// calculator constants
const NUM1 = {
  value: "",
  hasDecimal: false,
};
const NUM2 = {
  value: "",
  hasDecimal: false,
};

// First run
let currentInput = NUM1;
