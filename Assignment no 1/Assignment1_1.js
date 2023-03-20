function Maximum(No1) {
    var Max = No1[0];
    var Cnt = 0;
    for (Cnt = 0; Cnt < 3; Cnt++) {
        if (Max < No1[Cnt]) {
            Max = No1[Cnt];
        }
    }
    return Max;
}
var iNo1 = [23, 89, 6];
var iRet = 0;
iRet = Maximum(iNo1);
console.log("The largest number is : " + iRet);
