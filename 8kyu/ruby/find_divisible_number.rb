# Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
#  First argument is an array of numbers and the second is the divisor.

def divisible_by(numbers, divisor)
    count = 0
     array = []
     for n in numbers
     if n % divisor == 0
     array.push(n)
       count += 1
     end
   end
     array
   end
     