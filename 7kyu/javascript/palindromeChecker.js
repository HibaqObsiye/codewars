// Given an array of strings, check if each string is a palindrome and return an array of boolean values indicating the result.

function palindrome(word1, word2){
    word2Checker = word2.split("").reverse()
     word1Checker = word1.split("")
   
     return word2Checker.join("").toLowerCase() === word1Checker.join("").toLowerCase()
     
}