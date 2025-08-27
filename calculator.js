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
      return addDigitTo(currentInput);
    case "*":
    case "/":
    case "-":
    case "+":
      return addOperatorTo(currentInput);
    case ".":
      return addDecimalTo(currentInput);
    case "Enter":
    case "=":
      return runCalculator();
    case "Escape":
    case "clear ":
      return clearCalculator();
    case "Backspace":
      return backspaceInput(currentInput);
    default:
      return console.log("walrus sucks");
  }
}

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
