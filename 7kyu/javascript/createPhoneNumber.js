//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let first = "";
   let second = "";
   let third = "";
 
   // Use splice to extract the first three digits from the numbers array
   first = numbers.splice(0, 3).join("");
   second = numbers.splice(0, 3).join("");
   third = numbers.splice(0, 4).join("");
 
   // Use the variables in a template literal to format the phone number
   return `(${first}) ${second}-${third}`;
}