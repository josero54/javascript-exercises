const repeatString = function(string, repetitions) {
     
    if(repetitions >= 0){
    let result = '';
    for (let i = 1; i<= repetitions; i++){
     result += string;
    }
    return result;
} else {
       return "ERROR";
    }
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
