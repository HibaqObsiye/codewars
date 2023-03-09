// //When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  
    let vowels = ["a", "e", "i", "o", "u"]
      let modifiedString = ""
    for(let i = 0; i < vowels.length; i++){
      if(vowels.includes(string[i])){
        modifiedString += string[i].toUpperCase()
      }
      else{
       modifiedString += string[i]
      }     
    }
    return modifiedString 
}