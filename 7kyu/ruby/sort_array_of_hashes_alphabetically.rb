# Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

def sort_by_language(arr)
    array = arr.sort_by{|hash| hash["first_name"]}
     
     array.sort_by{|hash| hash["language"]}
end