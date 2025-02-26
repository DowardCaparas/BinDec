const userInput = document.getElementById("user_input");
const result = document.getElementById("result");
const copyResult = document.getElementById("copy_result")

// function to accept only numbers
const validateInput = (event) => {
  const value = event.target;

  value.value = value.value.replace(/[^0-9]/g, "");
};

const updateResult = () => {
  const input = userInput.value; //User input binary or decimal

  if (input === "") {
    result.innerText = "";
  } else if (/^[01]+$/.test(input)) {
    result.innerText = parseInt(input, 2);
  } else {
    result.innerText = parseInt(input).toString(2);
  }

};

const copyToClipboard = () => {
  // Get the result first
  const resultText = result.value;

  if(resultText){
    // Copy the result to the clipboard
    navigator.clipboard.writeText(resultText).then(() => {
      alert("Result copied to the clipboard");
    }).catch((err) => {
      alert("Error copying result: ", err)
    })
  }
}

userInput.addEventListener("input", updateResult);
copyResult.addEventListener("click", copyToClipboard)

// Clear the input field when the user refresh the page
window.onload = () => userInput.value = "";