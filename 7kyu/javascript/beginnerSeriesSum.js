function getSum(a, b)
{
 if(a === b){
    return a 
  }
  
  
  let array = []
  let start = a
  let end = b
 if(a > b){
   start = b
   end = a
 }

  for(let i = start; i <= end || i <= a; i++){
    array.push(i)
  }
  
    let sum = 0
  
  for(let j = 0; j < array.length; j++){
    sum += array[j]
   
  }
  return sum
}