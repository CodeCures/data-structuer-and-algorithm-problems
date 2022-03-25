function miniMaxSum(arr) {
     let n = 4;
    let tempSum = 0;
    let diff = arr.length - 4;
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    
    
    for(let i = 0; i < arr.length; i++){
        tempSum += arr[i];
        
        if(i >= n - 1){
            min = Math.min(min, tempSum)
            max = Math.max(max, tempSum)
            tempSum -= arr[i - (n - 1)]
        }
        
    }
    console.log(min, max)
}

// miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])