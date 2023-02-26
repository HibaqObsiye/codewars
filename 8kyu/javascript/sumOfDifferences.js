// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    // Sort the array in descending order
   arr.sort((a, b) => b - a);
 
   // Create a variable to hold the sum of differences
   let sum = 0;
 
   // Iterate through the sorted array
   for (let i = 1; i < arr.length; i++) {
     // Subtract the previous element from the current element and add to the sum
     sum += arr[i - 1] - arr[i];
   }
 
   // Return the sum
   return sum;
}