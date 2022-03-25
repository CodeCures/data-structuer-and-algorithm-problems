// write a function called same which accepts two arrays. The function shold return true if every value in the array has its 
// has it corresponding value squared in the second array. The frequency of the value must be the same

function same(arr1, arr2) {
    // check if the arrays are of the same length
    if(arr1.length !== arr2.length) return false;

    //loop through arr1 and check if the sqaure of the value exits in arr2, remove the element arr2 if it exists and return false 
    // it does not exist
    for (let val of arr1) {
        
        // check if val^2 exists in arr2
        correctIndex = arr2.indexOf(val ** 2)
        if(correctIndex === -1) return false;
        
        // reset arr2
        arr2.splice(correctIndex, 1)
    }
    //return true
    return true
}

same([1,2,3,10], [1,4,9,100])
same([1,2,3,10, 4], [1,4,9,100,16])
same([], [])