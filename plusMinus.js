function plusMinus(arr) {
    // Write your code here
    let lookup = {plus: 0, minus: 0, zero: 0};
    let arraySize = arr.length;
    
    for(let char of arr){
        //check if char is 0
        if(char === 0) lookup['zero'] = lookup['zero'] + 1;
        // check if character is less than 0
        else if(char < 0) lookup['minus'] = lookup['minus'] + 1;
        // check for positive numbers
        if(char > 0) lookup['plus'] = lookup['plus'] + 1;
    
            
    }
    
    console.log((lookup['plus'] / arraySize).toFixed(6));
    console.log((lookup['minus'] / arraySize).toFixed(6));
    console.log((lookup['zero'] / arraySize).toFixed(6));

}

plusMinus([1, -2, -7, 9, 1, -8, -5]);