# You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

def is_ruby_coming(list)
    list.any? do |x|
  
      if x[:language] != 'Ruby'
        false
      else
        true
      end
    end
end