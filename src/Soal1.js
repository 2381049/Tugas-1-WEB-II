function countNumOfValley(steps, path) {
    var countValley = 0;
    var temp = "";
    for (var i = 0; i < steps; i++) {
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
var numOfValley = countNumOfValley(8, "UDDDUDUU");
console.log(numOfValley);
