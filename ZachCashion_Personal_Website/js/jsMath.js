// Code for jsMath

$("#jsMathButton").click(function(){

  // Step 1: Get User data
  var num1 = Number($("#jsMathInput1").val());
  var num2 = Number($("#jsMathInput2").val());
  var num3 = Number($("#jsMathInput3").val());
  var num4 = Number($("#jsMathInput4").val());
  var num5 = Number($("#jsMathInput5").val());

  // Step 2: Make caculations
  var sum = num1 + num2 + num2 + num3 + num4 + num5;
  var product = num1 * num2 * num3 * num4 * num5;
  var array = [num1, num2, num3, num4, num5];

  function myArrayMax(x) {
     return Math.max.apply(null, x);
  }

  function myArrayMin(x) {
     return Math.min.apply(null, x);
  }

  // Step 3: Output the results
  var outputSum = "The Sum of your numbers is " + sum;
  var outputMean = "The Mean of your numbers is " + (sum/5);
  var outputProduct = "The Product of your numbers is " + product;
  var outputGreatest = "The Greatest of your numbers is " + myArrayMax(array);
  var outputLeast = "The least of your numbers is " + myArrayMin(array);

  $("#sumResults").text(outputSum);
  $("#meanResults").text(outputMean);
  $("#productResults").text(outputProduct);
  $("#greatestResults").text(outputGreatest);
  $("#leastResults").text(outputLeast);
});

//Clear function
$("#clearButtonMath").click(function(){
  $("#jsMathInput1,#jsMathInput2,#jsMathInput3,#jsMathInput4,#jsMathInput5").val("");

        $("#sumResults").text("");
        $("#meanResults").text("");
        $("#productResults").text("");
        $("#greatestResults").text("");
        $("#leastResults").text("");

});
