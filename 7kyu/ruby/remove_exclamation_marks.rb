# Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

def remove(s)
    x = s.split.reject{|element| element.count("!") == 1} 
    if x.empty? || x
        x * ' '
    
    end
end