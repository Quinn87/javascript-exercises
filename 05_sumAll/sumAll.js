const sumAll = function(numOne, numTwo) {
    let total = 0

    if (((numOne < 0 || numTwo < 0)) || (!Number.isInteger(numOne) || !Number.isInteger(numTwo)))
    {
        return "ERROR";
    }
        
    else if (numOne > numTwo){
        
        for(i= numTwo; i <= numOne; i++){
            total = total + i;
        }
    }

    else {
        for(i= numOne; i <= numTwo; i++){
            total = total + i;
        }
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
