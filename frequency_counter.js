// write a function called same which accepts two arrays. The function shold return true if every value in the array has its 
// has it corresponding value squared in the second array. The frequency of the value must be the same

function same(arr1, arr2) {
    // check if the arrays are of the same length
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    //loop through arr1 and check if the sqaure of the value exits in arr2, remove the element arr2 if it exists and return false 
    // it does not exist
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) return false;

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true
}

// same([1,2,3,10], [1,4,9,100])
same([1,2,3,10,4,2], [1,4,9,100,16,2])
// same([], [])