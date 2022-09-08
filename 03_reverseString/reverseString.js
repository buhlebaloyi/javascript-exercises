const reverseString = function(stringIn) {
    let i = stringIn.length - 1;
    //let j = 0;
    newString = "";
    while (i >= 0){
        newString += stringIn[i];
        i--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
