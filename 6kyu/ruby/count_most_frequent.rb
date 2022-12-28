# Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

def most_frequent_item_count(collection)
    array = []
    
    return 0 if collection.empty?
  
    x = collection.group_by(&:itself)
  
    x.each do |key, value|
     array.push(value.count)
    
    end
    array.max 
  end