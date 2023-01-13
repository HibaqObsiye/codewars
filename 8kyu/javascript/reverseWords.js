// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    let newString = str.split(" ").reverse() 
    return newString.join(" ") ; // reverse those words
}