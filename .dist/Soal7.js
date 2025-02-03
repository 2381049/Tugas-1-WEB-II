"use strict";
function plusMinus(...arr) {
    let temp = new Map();
    let arrRatios = [];
    for (let i = 0; i < arr.length; i++) {
        if (temp.has(arr[i])) {
            let updatedKey = temp.get(arr[i]);
            updatedKey++;
            temp.set(arr[i], updatedKey);
        }
        else {
            temp.set(arr[i], 1);
        }
    }
    for (let value of temp.values()) {
        arrRatios.push((value / arr.length).toPrecision(7));
    }
    return arrRatios;
}
console.log(plusMinus(1, 1, 0, -1, -1));
//# sourceMappingURL=Soal7.js.map