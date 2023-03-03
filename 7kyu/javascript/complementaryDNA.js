// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    let newOne = dna.split("")
    dnaList = {"A": "T", "T":"A","G":"C", "C": "G"}
    let newArray = []
    for(let i = 0; i < newOne.length; i++){
      newArray.push(dnaList[newOne[i]])
    }
    return newArray.join("")
}