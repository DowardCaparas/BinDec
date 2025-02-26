const userInput = document.getElementById("user_input");
const result = document.getElementById("result");
const copyResult = document.getElementById("copy_result")
const copyLabel = document.getElementById("copy_label");
const copy_icon = document.getElementById("copy_icon");

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

  copy_icon.src = "/copy.svg" //update the icon
  copyLabel.innerText = "Copy";
};

const copyToClipboard = () => {
  // Get the result first
  const resultText = result.value;

  if(resultText){
    // Copy the result to the clipboard
    navigator.clipboard.writeText(resultText).then(() => {

      copy_icon.src = "/check.svg"  //update the icon
      copyLabel.innerText = "Copied";
       
    }).catch((err) => {
      alert("Error copying result: ", err)
    })
  }
}

userInput.addEventListener("input", updateResult);
copyResult.addEventListener("click", copyToClipboard)

// Clear the input field when the user refresh the page
window.onload = () => userInput.value = "";