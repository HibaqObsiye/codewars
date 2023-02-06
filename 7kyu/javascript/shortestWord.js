// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let words = s.split(" ")
  
    let length = words.map(x => x.length)
    let y = Math.min(...length)
    return y
}