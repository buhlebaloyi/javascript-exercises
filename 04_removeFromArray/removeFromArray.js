const removeFromArray = function() {
    initialArray = arguments[0];
    let someArray = [];
    for (array in initialArray) {
        noOfExtraArguments = arguments.length - 1;
        while (noOfExtraArguments >= 0){
            if (initialArray[array] === arguments[noOfExtraArguments]){
                initialArray.splice(array, 1);
                noOfExtraArguments--;
            } else {
                someArray.push(arguments[noOfExtraArguments]);
                noOfExtraArguments--;
            }
        }
    }
    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
