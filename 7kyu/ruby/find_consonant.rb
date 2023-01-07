# Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

def consonant_count(str)
    consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
   
     array = []
   
    strings = str.downcase.chars
     
     strings.each do |x|
       if consonants.include?(x)
         array.push(x)
       end
    end
     array.length    
   end