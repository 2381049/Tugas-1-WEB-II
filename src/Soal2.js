function roundGrades() {
    var grades = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        grades[_i] = arguments[_i];
    }
    var roundedGrades = grades;
    for (var i = 0; i < grades.length; i++) {
        var nearestFiveFactor = Math.trunc((grades[i] + 5) / 5) * 5;
        if (nearestFiveFactor - grades[i] < 3 && grades[i] > 38) {
            roundedGrades[i] = nearestFiveFactor;
        }
        else {
            roundedGrades[i] = grades[i];
        }
    }
    return roundedGrades;
}
console.log(roundGrades(73, 67, 38, 33));
