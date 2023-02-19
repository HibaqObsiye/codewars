# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

# Write a function which takes a list of strings and returns each line prepended by the correct number.

# The numbering starts at 1. The format is n: string. Notice the colon and space in between.

def number lines
    n = lines.count
   assigned_numbers = (1..n).to_a.map{|x| x.to_s + ':'}
   
   assigned_numbers.zip(lines).map { |a| a.join(' ') }
end