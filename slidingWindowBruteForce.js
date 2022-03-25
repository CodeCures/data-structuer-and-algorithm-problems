function isValidSlidingWindow(arr, k) {
    // check if k is greater than array size
    if(arr.length < k) return null;

    // set initial max value to negative infinity to accomodate values

    let max = Number.MIN_VALUE;
    
    // loop through array by arr.length - k + 1 this is to make sure you do not get out of bound error

    for (let i = 0; i < arr.length - k + 1; i++) {
        let currentSum = 0;

        for (let j = 0; j < k; j++) {
            currentSum = currentSum + arr[i + j]
        }
        max = Math.max(max, currentSum);
    }

    return max;
    
}

// isValidSlidingWindow([100, 200, 300, 400], 2)

// isValidSlidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
isValidSlidingWindow([2,3], 3);