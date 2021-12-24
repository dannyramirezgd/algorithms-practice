// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    result = 0;
    for (let i = 0; i<num; i++){
        result++;
        console.log(result)
    }
};

//I have an issue with this... 
//it doesn't log num even though it I got a "solved" message
//the for loop ends right before num. In order to log num the length should be i<=num