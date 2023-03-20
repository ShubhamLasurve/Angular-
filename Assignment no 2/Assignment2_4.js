function CheckArmstrong(iNo) {
    var iDigitCount = 0;
    var iTemp = iNo;
    var iDigit = 0;
    var iCnt = 0;
    var iPower = 1;
    var Sum = 0;
    while (iTemp != 0) {
        iDigitCount++;
        iTemp = iTemp / 10;
    }
    iTemp = iNo;
    while (iTemp != 0) {
        iDigit = iTemp % 10;
        for (iCnt = 0; iCnt <= iDigitCount; iCnt++) {
            iPower = iPower * iDigit;
        }
        Sum = Sum + iPower;
        iPower = 1;
        iTemp = iTemp / 10;
    }
    if (Sum == iNo) {
        return true;
    }
    else {
        return false;
    }
}
var No = 370;
var bRet = false;
bRet = CheckArmstrong(No);
if (bRet == true) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not an Armstrong number");
}
