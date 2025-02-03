"use strict";
function drawStaircase(n) {
    for (let i = 0; i < n; i++) {
        let textInALine = "";
        for (let j = n - 1; j >= 0; j--) {
            if (i >= j) {
                textInALine += "#";
            }
            else {
                textInALine += " ";
            }
        }
        console.log(textInALine);
    }
}
drawStaircase(4);
//# sourceMappingURL=Soal4.js.map