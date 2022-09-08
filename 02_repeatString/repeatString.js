const repeatString = function(string, times) {
    let i = 0;
    let stringOut = "";
    while (i < times) {
        stringOut += string;
        i++;
    }

    if (stringOut === "" && parseInt(stringOut) >= 0){
        return "";
    }
    else if (parseInt(stringOut) < 0){
        throw new Error('ERROR');
        //return Error();
    } else {
        return stringOut;
    }
};
// Do not edit below this line
module.exports = repeatString;
