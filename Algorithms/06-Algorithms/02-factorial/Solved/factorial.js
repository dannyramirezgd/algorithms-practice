// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    arr=[];
    result = 1
    for (let i=num; i>1; i--){
        arr.push([i]);
    }
    for (let i=0; i<arr.length; i++){
        result = arr[i]*result
    }
return result;
};
