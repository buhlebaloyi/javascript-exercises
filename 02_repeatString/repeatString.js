const repeatString = function(string, times) {
    if (times < 0){
        return "ERROR";
    }
    
    let i = 0;
    let stringOut = "";
    while (i < times) {
        stringOut += string;
        i++;
    }

    if (stringOut === "" && parseInt(stringOut) >= 0){
        return "";
    } else {
        return stringOut;
    }
};
// Do not edit below this line
module.exports = repeatString;
