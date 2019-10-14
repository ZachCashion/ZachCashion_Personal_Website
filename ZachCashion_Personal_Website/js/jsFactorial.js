// Code for js Factorial
$("#jsFactorialButton").click(function(){
  // Step 1: Get User Data
  var inputFactorial = Number($("#jsFactorialInput").val());

  // Step 2: Make Caculations
  var i = inputFactorial - 1;
  var factorial = inputFactorial;
  for (i; i >= 1 ; i--) {
    factorial *= i;
  }

  // Step 3: Output Results
  var outputFactorial = "The Factorial of your number is " + factorial;

  $("#factorialResults").text(outputFactorial);
});

//Clear function
$("#clearButtonFactorial").click(function(){
  $("#jsFactorialInput").val("");

        $("#factorialResults").text("");

});
