// Handle inputs
document.addEventListener("keydown", (event) => {
  const value = event.key;
  const type = inputType(event);
  if (type) {
    handleInput(type, value);
  }
});

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    const type = inputType(value);
    handleInput(type, value);
  });
});

const NUM1 = {
  value: "",
  hasDecimal: false,
};
const NUM2 = {
  value: "1",
  hasDecimal: false,
};

// First run
let currentInput = NUM1;
