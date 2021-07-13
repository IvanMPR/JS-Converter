function milesConvert() {
  var milesInput = document.getElementById("miles-input");
  var conversionAmount = milesInput.value;
  var convertedValue = conversionAmount * 1.6;
  if (isNaN(conversionAmount)) {
    document.getElementById("km-input").value =
      " Error ! Please enter a numeric value ! ";
    document.getElementById("km-input").style.color = "red";
  }
  //} else if (conversionAmount.indexOf(0) === 0 && Number.isNaN(conversionAmount.indexOf(1))) {
  //   document.getElementById("km-output").value =
  //     " Error ! You can not start your input with '0' !"; }

  else {
    document.getElementById("km-input").value = convertedValue + " kilometers";
    document.getElementById("km-input").style.color = "#333";
  }

  // function timer() {
  //   milesInput.value = "";
  // }setTimeout(timer, 3000);
    
}
  
    
  
    
  
  



function kmConvert() {
  var kmInput = document.getElementById("km-input");
  var conversionAmount = kmInput.value;
  var convertedValue = conversionAmount / 1.6;
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


