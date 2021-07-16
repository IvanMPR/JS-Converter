const milesInput = document.getElementById("miles-input");
const kmInput = document.getElementById("km-input");
const resetBtn = document.getElementById("clear");
//////////////////////////////////////////////////////////////
window.addEventListener("load", function () {
  milesInput.focus();
});

milesInput.addEventListener("keyup", milesConvert);
kmInput.addEventListener("keyup", kmConvert);

function milesConvert() {
  const conversionAmount = milesInput.value;
  const convertedValue =
    (conversionAmount * 1.6) % 1 === 0
      ? conversionAmount * 1.6
      : (conversionAmount * 1.6).toFixed(1);
  if (isNaN(conversionAmount)) {
    document.getElementById("km-input").value =
      " Error ! Please enter a numeric value ! ";
    document.getElementById("km-input").style.color = "red";
  } else {
    document.getElementById("km-input").value = `${convertedValue} kilometers`;
    document.getElementById("km-input").style.color = "#333";
  }
}

function kmConvert() {
  const conversionAmount = kmInput.value;
  const convertedValue =
    (conversionAmount / 1.6) % 1 === 0
      ? conversionAmount * 1.6
      : (conversionAmount / 1.6).toFixed(1);
  if (isNaN(conversionAmount)) {
    document.getElementById("miles-input").value =
      " Error ! Please enter a numeric value ! ";
    document.getElementById("miles-input").style.color = "red";
  } else {
    document.getElementById("miles-input").value = `${convertedValue} miles`;
    document.getElementById("miles-input").style.color = "#333";
  }
}
// Button function
clear.addEventListener("click", function () {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  milesInput.focus();
});
