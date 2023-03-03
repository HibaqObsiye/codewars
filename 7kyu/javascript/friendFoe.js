// Make a program that filters a list of strings and returns a list with only your friends name in it.

function friend(friends){
    return friends.filter(person => person.length === 4)
}