// Given a string, write a function that determines is the second string is an anagram. An anagram is a word, phrase or name 
// formed by rearanging the letter of another, such as cinema, from iceman

function anagram(str1, str2) {
    // check if the arrays are of the same length
    if(str1.length !== str2.length) return false;

    //loop through str1 and check if char exist in str2, remove the char in str2 if it exists and return false 
    // it does not exist
    for (let char of str1) {
        
        // check if char exist in str2
        correctIndex = str2.indexOf(char)
        if(correctIndex === -1) return false;

        // reset str2
        str2 = str2.replace(char, '');
    }
    //return true
    return true
}



// anagram('cinema', 'iceman')
anagram('bag', 'gab')