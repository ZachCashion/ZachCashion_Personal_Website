// Get User Data
// With jQuery

$("#jsMathButton").click(function(){

});


// Make caculations
function compute(array){

   for (i = 0; i < array.length; i+= 1) {
         product *= array[i];
         sum += array[i];
   }
   console.log('Sum : '+sum);
   console.log('Product : ' +product);
   console.log('Mean : ' +(sum/array.length));
   console.log('Greatest : ' +myArrayMax(array));
   console.log('Least : ' +myArrayMin(array));

   function myArrayMax(x) {
      return Math.max.apply(null, x);
   }

   function myArrayMin(x) {
      return Math.min.apply(null, x);
   }

}


// Output results
