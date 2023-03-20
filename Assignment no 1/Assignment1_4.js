function CheckPrime(No1) {
    var bFlag = false;
    var Cnt = 0;
    for (Cnt = 2; Cnt <= No1; Cnt++) {
        if (No1 % Cnt == 0) {
            bFlag = true;
        }
    }
    return bFlag;
}
var No = 11;
var bRet = true;
bRet = CheckPrime(No);
if (bRet == true) {
    console.log(" It is prime number");
}
else {
    console.log("It is not prime number");
}
