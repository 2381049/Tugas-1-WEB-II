"use strict";
function countNumOfValley(steps, path) {
    let countValley = 0;
    let temp = "";
    for (let i = 0; i < steps; i++) {
        if (path[i] == "D") {
            temp += "D";
        }
        else {
            temp = "";
        }
        if (temp == "DD") {
            countValley++;
            temp = "";
        }
    }
    return countValley;
}
let numOfValley = countNumOfValley(8, "UDDDUDUU");
console.log(numOfValley);
//# sourceMappingURL=Soal1.js.map