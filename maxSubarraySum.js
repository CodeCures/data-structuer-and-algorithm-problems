function maxSubarraySum(arr, num){
    if(arr.length < num || arr.length == 0) return null;
    
    let tempSum = 0
    let maxSum = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        tempSum += arr[i];

        if(i >= num - 1){
            maxSum = Math.max(maxSum, tempSum);
            tempSum -= arr[i - (num -1)];
        }
    }
    
    return maxSum;
}

maxSubarraySum([100,200,300,400,50], 2)