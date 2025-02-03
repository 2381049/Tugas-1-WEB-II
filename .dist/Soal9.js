"use strict";
function climbingStairs(n) {
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;
    let prev2 = 1;
    let prev1 = 2;
    let curr = 0;
    for (let i = 3; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
console.log(climbingStairs(8));
//# sourceMappingURL=Soal9.js.map