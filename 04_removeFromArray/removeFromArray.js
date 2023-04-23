const removeFromArray = function (array, ...numbers) {
    for (let num of numbers) {
        let index = array.indexOf(num);
        if (index > -1) {
            array.splice(index, 1);

        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
