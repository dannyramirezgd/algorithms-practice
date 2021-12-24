// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let result = "";
    for (let i=str.length-1; i>=0; i--){
        result += str[i]
    }
    if(str === result){
        return true;
    } else {
        return false
    }
};
