function lengthOfSubstring(str) {
    let start = 0;
    let max = 0;
    let set = new Set();

    for (let end = 0; end < str.length; end++) {
        while(set.has(str[end])){
            set.delete(str[start]);
            start = start + 1;
            console.log(start)
        }
        set.add(str[end]);
        max = Math.max(max, end - start + 1);
    }
    return max;
}

lengthOfSubstring('ab0c0ed')