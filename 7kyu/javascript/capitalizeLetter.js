// Given an array of strings, capitalize the first letter of each string and return the new array.

function capitalize(words){
    return words.map(x => x.charAt(0).toUpperCase() + x.slice(1)) 
    
}