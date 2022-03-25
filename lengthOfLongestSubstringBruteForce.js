function isUnique(substring) {
    const set = new Set();

    for (let char of substring) {
        if(set.has(char)) return false;
        set.add(char);
    }
    return true;
}

function lengthOfLongestSubstring(str) {
   let start = 0, end = 0, max = 0;

    for (let start = 0; start < str.length; start++) {
        for (let end = 0; end < str.length; end++) {
            let substring = str.substring(start, end + 1);
            
            if(isUnique(substring)){
                max = Math.max(max, substring.length);
            }
        }
    }
    return max;
}

lengthOfLongestSubstring('ab0c0ed')