function hasDuplicates(...args) {
    // return false if args is empty
    if(args.length === 0) return false;

    let map = {};
    
    for (let char of args) {
        map[char] = (map[char] || 0) + 1;
        // return false if char exists is ma[]
        if(map[char] > 1) return true;
    }
    // return boolean by default
    return false;
}

hasDuplicates(1,2,3) // false
hasDuplicates(1,2,2) // true
hasDuplicates('a','b','c','a') // true