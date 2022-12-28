#Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

def power_of_two?(x)
    if (x * x) % 2 == 0
        return true
    else
        return  false
    end
end