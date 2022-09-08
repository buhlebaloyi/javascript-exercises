const repeatString = function(string,times) {
    let i = 0;
    let stringOut = "";
    while (i < times) {
        stringOut += string;
        i++;
    }
    return stringOut;
};

// Do not edit below this line
module.exports = repeatString;
