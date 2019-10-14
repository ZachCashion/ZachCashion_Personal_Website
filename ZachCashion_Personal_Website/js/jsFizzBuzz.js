// Code for js FizzBuzz
$("#jsFizzBuzzButton").click(function(){

  // Step 1: Get User Data
  var input1 = Number($("#jsFizzBuzzInput1").val());
  var input2 = Number($("#jsFizzBuzzInput2").val());

  // Step 2: Make Caculations
  var output ="";
  for (i = 1; i <= 100 ; i++) {

    if (i%input1==0 && i%input2==0){
      output += "FizzBuzz ";
    } else if (i%input1==0) {
      output += "Fizz ";
    } else if (i%input2==0) {
      output += "Buzz ";
    } else {
      output += i + " ";
    }

  }

  // Step 3: Output Results
  $("#fizzBuzzResults").text(output);
});

//Clear function
$("#clearButtonFizzBuzz").click(function(){
  $("#jsFizzBuzzInput1").val("");
  $("#jsFizzBuzzInput2").val("");

        $("#fizzBuzzResults").text("");

});
