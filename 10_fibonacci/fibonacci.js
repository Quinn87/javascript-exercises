const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    let numbers = [1, 1];
    for (i = 1; i < num - 1; i++){
        let previousNum = numbers[i] + numbers[i - 1];
        numbers.push(previousNum);
    }
    return numbers[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
