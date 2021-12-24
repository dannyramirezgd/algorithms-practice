// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    result = 0
    for (let i = 0; i<arr.length; i++){
        result = arr[i]+result
    }
    return result;
};
