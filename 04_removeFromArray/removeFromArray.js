const removeFromArray = function(...theArgs) {
    const argsToRemove = [];
    const initialArray = theArgs[0];
    let count1 = 0;
    let count2 = 0;
    for (let i = 1; i < theArgs.length; i++) {
        argsToRemove.push(theArgs[i]);
    }

    while (count1 < initialArray.length){
        while (count2 < argsToRemove.length){
            if (initialArray[count1] === argsToRemove[count2]){
                // Remove both the matching vales from both the arrays
                initialArray.splice(count1, 1);
                argsToRemove.splice(count2, 1);

                // resetting inner and outer counts
                count1 = 0;
                count2 = 0;
            } else {
                count2++; // increment inner count
            }
            //console.log(argsToRemove);
        }
        count1++;
        count2 = 0;
    }

    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
