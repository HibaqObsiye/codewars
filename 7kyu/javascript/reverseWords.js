// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
          return s.match(/\w+[\w'’]*|[^\w\s]+/g).reverse().join("")
    }
}