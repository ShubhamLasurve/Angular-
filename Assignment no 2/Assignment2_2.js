function Summation(Arr) {
    var iSum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
}
var Arr = [23, 6, 7, 4, 5, 7];
var iRet = 0;
iRet = Summation(Arr);
console.log("The summation is : " + iRet);
