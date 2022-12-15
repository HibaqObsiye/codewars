# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
def moveZeros(arr) 
    x = arr.select{|num| num == 0}
    arr.delete(0)
    new_array = arr + x
    new_array
 
 end
