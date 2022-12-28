#Define a method/function that removes from a given array of integers all the values contained in a second array.
class Array
    def remove_(integer_list, values_list)
        values_list.each do |x|
            integer_list.delete(x)
        end
        integer_list
    end
end