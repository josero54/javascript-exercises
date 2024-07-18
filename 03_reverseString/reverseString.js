const reverseString = function(string) {

    const text_splitted = string.split("");
    reversed_text = text_splitted.reverse();
    output_text = reversed_text.join('');
    return output_text;

};

console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
