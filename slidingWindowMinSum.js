function minSubArrayLen(arr, k){
    let minSum = 0, curSum = 0;

    for (let val of arr) {
        curSum += val;
        minSum = Math.min(minSum, curSum);
        
        if(curSum >= k) return minSum;
    }
    return minSum;
}

// minSubArrayLen([2,1,6,5,4], 9)
minSubArrayLen([2,3,1,2,4,3], 7)
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)