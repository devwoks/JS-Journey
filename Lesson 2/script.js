// Get references to HTML elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addBtn = document.getElementById("addBtn"); //and so on for other buttons

// Add event listeners to buttons
addBtn.addEventListener("click", () => calculate('+'));
//similarly add event listeners for other buttons

// Calculation function
function calculate(operator) {
  let numA = parseFloat(num1.value);
  let numB = parseFloat(num2.value);
  let res;

  if (isNaN(numA) || isNaN(numB)) {
    result.textContent = "Invalid input!";
    return;
  }

  switch (operator) {
    case '+': res = numA + numB; break;
    case '-': res = numA - numB; break;
    case '*': res = numA * numB; break;
    case '/': res = numA / numB; break;
    default: result.textContent = "Invalid operator!"; return;
  }
  result.textContent = "Result: " + res;
}