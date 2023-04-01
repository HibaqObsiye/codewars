// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

let numbers = [1,2,3,4]

let counter = 0
for(let i = 0; i < numbers.length;i++){
  if(numbers[i] % 2 === 0){
    counter = counter + numbers[i]
  }
}
return console.log(counter)