// Write code to return the largest number in the given array

var maxNum = function(arr) {
    arr.sort(function(a,b){
        return b-a;
    });
    return arr[0];
};
