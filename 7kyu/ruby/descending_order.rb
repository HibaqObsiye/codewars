# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
def descending_order(n)
    x = n.to_s.chars.map{|digit| digit.to_i}
    y = x.sort{ |a, b| b <=> a }
    y.join.to_i
end