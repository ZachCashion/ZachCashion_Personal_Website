let jsMath = document.getElementById("jsMath")
let jsMathInput = document.getElementById("jsMathInput")
let output = document.getElementById("output")


let array = jsMathInput.split("");
let product = 1;
let sum = 0;
let i;

jsMath.addEventListener("submit", (e) => {
  e.preventDefault()
  compute(array)
})


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
