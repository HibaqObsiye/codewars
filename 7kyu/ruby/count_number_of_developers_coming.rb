def count_developers(list)
    array = []
    list.each do |x|
      if x[:continent] == 'Europe' && x[:language] == 'JavaScript'
        array.push(x)
      end
    end
    array.count
  end