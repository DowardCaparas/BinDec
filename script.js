const inputLabel = document.getElementById("input_label");
const userInput = document.getElementById("user_input");
const result = document.getElementById("result");
const copyResult = document.getElementById("copy_result");
const copyLabel = document.getElementById("copy_label");
const copy_icon = document.getElementById("copy_icon");
const decimalToBinaryButton = document.getElementById("decimal_to_binary");
const binaryToDecimalButton = document.getElementById("binary_to_decimal");

// Action state
let isDecimalToBinary = true;

// Function to accept only numbers
const validateInput = (event) => {
  const value = event.target;
  value.value = value.value.replace(/[^0-9]/g, "");
};

// Update result based on current state
const updateResult = () => {
  const input = userInput.value.trim(); // User input binary or decimal

  if (input === "") {
    result.innerText = "";
  } else if (isDecimalToBinary) {
    result.innerText = parseInt(input).toString(2); // Decimal to Binary
  } else {
    result.innerText = parseInt(input, 2);  // Binary to Decimal
  }

  copy_icon.src = "/copy.svg"; // Update the icon
  copyLabel.innerText = "Copy";
};

// Copy the result to clipboard
const copyToClipboard = () => {
  const resultText = result.innerText; // Get result from innerText

  if (resultText) {
    // Copy the result to the clipboard
    navigator.clipboard.writeText(resultText).then(() => {
      copy_icon.src = "/check.svg";  // Update the icon
      copyLabel.innerText = "Copied";
    }).catch((err) => {
      alert("Error copying result: ", err);
    });
  }
};

// Toggle button states based on action
const toggleButtons = () => {
  if (isDecimalToBinary) {
    decimalToBinaryButton.disabled = true;
    binaryToDecimalButton.disabled = false;
  } else {
    decimalToBinaryButton.disabled = false;
    binaryToDecimalButton.disabled = true;
  }
};

// Set button states on page load
toggleButtons();

// Event listeners
decimalToBinaryButton.addEventListener("click", () => {
  inputLabel.innerText = "Type a decimal to convert in binary";
  userInput.value = "";
  result.innerText = "";
  isDecimalToBinary = true;
  toggleButtons(); // Update the button states
});
binaryToDecimalButton.addEventListener("click", () => {
  inputLabel.innerText = "Type a binary to convert in decimal ";
  userInput.value = "";
  result.innerText = "";
  isDecimalToBinary = false;
  toggleButtons(); // Update the button states
});

userInput.addEventListener("input", updateResult);
copyResult.addEventListener("click", copyToClipboard);

// Clear the input field when the user refreshes the page
window.onload = () => userInput.value = "";
