function lengthOfLongestSubstring(str) {
   let j = 0,  max = 0, map = {}, counter = 0;

    for (let i = 0; i < str.length; i++) {    
        if(map[str[i]] !== undefined && map[str[i]] >= j){
            j = map[str[i]] + 1;
            console.log(j)
        }
        map[str[i]] = i;
        max = Math.max(max, i - j + 1)
        // console.log(max)
    }
    
    return max;
}

lengthOfLongestSubstring('ab0c0ed')