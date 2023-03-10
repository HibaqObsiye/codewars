#In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
# make as few changes as possible.
# if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

def solve s
    if s.scan(/[A-Z]/).length == s.scan(/[a-z]/).length
    s.downcase
  elsif s.scan(/[A-Z]/).length < s.scan(/[a-z]/).length
    s.downcase
  elsif s.scan(/[A-Z]/).length > s.scan(/[a-z]/).length
    s.upcase
  end
end