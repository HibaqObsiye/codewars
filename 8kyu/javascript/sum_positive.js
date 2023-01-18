// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    const newArray = arr.filter(x => x >= 0)
    sum = 0
    
    for(i=0; i < newArray.length; i++){
      if(i >= 0){
        sum+= newArray[i]
      }
    }
    return sum
  }