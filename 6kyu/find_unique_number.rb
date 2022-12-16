# There is an array with some numbers. All numbers are equal except for one. Try to find it!
def find_uniq(arr)
    #   arr.map do |x|
    #   return x if arr.count(x) < 2
    # end
    arr.select{|x|
    arr.count(x) < 2}.pop
end