//Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0


function sameCase(a, b){
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,."" " "<>\/?~]/
     if ( special.test(a) || special.test(b) === true){
      return -1
    }
    else if (/^[A-Z]+$/.test(a) && /^[A-Z]+$/.test(b) == true || /^[a-z]+$/.test(a) && /^[a-z]+$/.test(b) == true ){
      return + 1
    }
    else{
      return 0
    }
  }