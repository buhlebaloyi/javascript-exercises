const sumAll = function(num1, num2) {
    let sum = 0;
    console.log(num1, num2);

    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else if (typeof num1 === typeof "" || typeof num2 === typeof ""){
        return "ERROR";
    } else if (num1.length > 1 || num2.length > 1){
        return "ERROR";
    } else {
        if (num1 < num2){
            for (let i = num1; i <= num2; i++){
                sum += i;
                //console.log(sum);
            }
        } else {
            for (let i = num2; i <= num1; i++){
                sum += i;
                console.log(sum);
            }
        }
    
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
