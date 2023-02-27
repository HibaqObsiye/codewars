// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    let sequence = dna.split("")
   
     let rnaSequence = ""
     {for(let i = 0; i < sequence.length; i++){ 
      rnaSequence += sequence[i].replace("T","U")
     }
     }
    // let newSequence = sequence.replace("T","U")
     return rnaSequence
}