const milesInput = document.getElementById("miles-input");
const kmInput = document.getElementById("km-input");
const resetBtn = document.getElementById("clear");
//////////////////////////////////////////////////////////////
window.addEventListener("load", function () {
  milesInput.focus();
});

function milesConvert() {
  var conversionAmount = milesInput.value;
  var convertedValue = (conversionAmount * 1.6).toFixed(1);
  if (isNaN(conversionAmount)) {
    document.getElementById("km-input").value =
      " Error ! Please enter a numeric value ! ";
    document.getElementById("km-input").style.color = "red";
  } else {
    document.getElementById("km-input").value = convertedValue + " kilometers";
    document.getElementById("km-input").style.color = "#333";
  }
}

function kmConvert() {
  var conversionAmount = kmInput.value;
  var convertedValue = (conversionAmount / 1.6).toFixed(1);
  if (isNaN(conversionAmount)) {
    document.getElementById("miles-input").value =
      " Error ! Please enter a numeric value ! ";
    document.getElementById("miles-input").style.color = "red";
  } else {
    document.getElementById("miles-input").value = convertedValue + " miles";
    document.getElementById("miles-input").style.color = "#333";
  }
}
// Button function
clear.addEventListener("click", function () {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  milesInput.focus();
});
