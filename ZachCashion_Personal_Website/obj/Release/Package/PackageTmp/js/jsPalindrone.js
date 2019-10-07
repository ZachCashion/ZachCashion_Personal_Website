// Code for js Palindrone
$("#jsPalindroneButton").click(function(){
  // Step 1: Get User Data
  var inputPalindrone = ($("#jsPalindroneInput").val());

  // Step 2: Make Caculations
  var array = inputPalindrone.split("");
  var reverseArray = array.reverse();
  var arrayToString = reverseArray.join("");

  if (inputPalindrone === arrayToString) {
    var outputPalindrone = "Your word is a Palindrone.";
  } else {
    var outputPalindrone = "Your word is not a Palindrone.";
  }
  // Step 3: Output Results

  $("#palindroneResults").text(outputPalindrone);
});
