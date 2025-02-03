"use strict";
function roundGrades(...grades) {
    let roundedGrades = grades;
    for (let i = 0; i < grades.length; i++) {
        let nearestFiveFactor = Math.trunc((grades[i] + 5) / 5) * 5;
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
//# sourceMappingURL=Soal2.js.map