// Given a string, write a function that determines is the second string is an anagram. An anagram is a word, phrase or name 
// formed by rearanging the letter of another, such as cinema, from iceman

function anagram(str1, str2) {
    // check if the string are of the same length
    if(str1.length !== str2.length) return false;
    
    // check for the number of occurence of each character
    let letterCounter1 = {}
    let letterCounter2 = {}

    for (let char of str1) {
        // if char exists increment count by 1 else add char and set count to 1
        letterCounter1[char] = (letterCounter1[char] || 0) +1
    }

    for (let char of str2) {
        // if char exists increment count by 1 else add char and set count to 1
        letterCounter2[char] = (letterCounter2[char] || 0) +1
    }

    for (let key in letterCounter1) {
        // check if letter exists in letterCounter2
        if(!(key in letterCounter2)) return false;
        
        // check if they have the samse frequency
        if(letterCounter2[key] !== letterCounter1[key]) return false;
    }
    return true;
}
