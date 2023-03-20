function Maximum(Arr) {
    var Max = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt <= Arr.length; iCnt++) {
        if (Max < Arr[iCnt]) {
            Max = Arr[iCnt];
        }
    }
    return Max;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var iRet = 0;
iRet = Maximum(Arr);
console.log("The largest number is : " + iRet);
