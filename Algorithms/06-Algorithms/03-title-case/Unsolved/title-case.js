// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    arr = str.split(" ");
    newArr=[];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase()));
    }
    result = newArr.join(" ")
    return result;
};
