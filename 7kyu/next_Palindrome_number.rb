def next_pal(val)
    x = 0
    while x >= 0 do
        val += 1
        x += 1
        if  val.digits.first == val.digits.join.to_i
            break
        end
    end
    val
end