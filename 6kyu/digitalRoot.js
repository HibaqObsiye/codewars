function digitalRoot(n) {
    let sum = 0;
     
     // Calculate the sum of digits
     while (n > 0) {
       sum += n % 10;
       n = Math.floor(n / 10);
     }
     
     // If the sum is still more than 9, continue adding the digits
     while (sum > 9) {
       let anotherSum = 0;
       let anotherSplit = sum.toString().split("").map(x => Number(x));
       for (let i = 0; i < anotherSplit.length; i++) {
         anotherSum += anotherSplit[i];
       }
       sum = anotherSum;
     }
     
     return sum;
}