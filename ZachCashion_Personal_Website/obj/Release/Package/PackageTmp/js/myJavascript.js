//Toggles for Show Code

$("#mathCode").hide();
$("#factorialCode").hide();
$("#fizzBuzzCode").hide();
$("#palindroneCode").hide();



// Math Button
$("#toggleButtonMath").click(function(){
  $("#mathCode").toggle();
  if ($(this).text() == "Show Code") {
    $(this).text("Hide Code");
  }
  else
  {
    $(this).text("Show Code");
  }
});

// Factorial Button
$("#toggleButtonFactorial").click(function(){
  $("#factorialCode").toggle();
  if ($(this).text() == "Show Code") {
    $(this).text("Hide Code");
  }
  else
  {
    $(this).text("Show Code");
  }
});

// FizzBuzz Button
$("#toggleButtonFizzBuzz").click(function(){
  $("#fizzBuzzCode").toggle();
  if ($(this).text() == "Show Code") {
    $(this).text("Hide Code");
  }
  else
  {
    $(this).text("Show Code");
  }
});

// Palindrone Button
$("#toggleButtonPalindrone").click(function(){
  $("#palindroneCode").toggle();
  if ($(this).text() == "Show Code") {
    $(this).text("Hide Code");
  }
  else
  {
    $(this).text("Show Code");
  }
});
