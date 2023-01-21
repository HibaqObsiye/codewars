# When provided with a number between 0-9, return it in words.

# Input :: 1

# Output :: "One".


def switch_it_up(number)
    case
      when number == 0
      "Zero"
      when number == 1
      "One"
      when number == 2
      "Two"
      when number == 3
      "Three"
      when number == 4
      "Four"
      when number == 5
      "Five"
      when number == 6
      "Six"
    when number == 7
      "Seven"
      when number == 8
      "Eight"
      when number == 9
      "Nine"
  end
  end