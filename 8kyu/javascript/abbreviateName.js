//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){
    array = name.split(" ")
    let newOne = array.map(x => x.charAt(0))
    return newOne.join(".").toUpperCase()
}