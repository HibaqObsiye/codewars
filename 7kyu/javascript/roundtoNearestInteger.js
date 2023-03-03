// Given an array of numbers, round each number to the nearest integer and return the new array.

function roundNumber(numbers){
    return numbers.map(x => Math.round(x))
}