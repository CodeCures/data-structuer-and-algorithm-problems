function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString()

    if(num1.length !== num2.length) return false;
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let char of num1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    
    for (let char of num2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for (let val in frequencyCounter1) {
        if(!(val in frequencyCounter2)) return false;
        if(frequencyCounter2[val] !== frequencyCounter1[val]) return false;
    }
    
    return true
}

sameFrequency(12323, 32132)