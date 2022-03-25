// Given a string, write a function that determines is the second string is an anagram. An anagram is a word, phrase or name 
// formed by rearanging the letter of another, such as cinema, from iceman

const isAnagram = (str1, str2) => {
    // check if the string are of the same length
    if(str1.length !== str2.length) return false;
    
    // check for the number of occurence of each character
    let mapMutations = {}

    for (let char of str1) {
        // if char exists increment count by 1 else add char and set count to 1
        map[char] = (map[char] || 0) + 1
    }

    for (let char of str2) {
        // if char exists decrement count by 1 else return false
        if(!map[char]){
            return false;
        }else{
            map[char] -= 1
        }
    }

    return true;
}

isAnagram('kalashnikov', 'vokinhsalak') // true
isAnagram('awesome', 'emosewa') // true
isAnagram('google', 'legoog'); // true
isAnagram('faster', 'faster');


