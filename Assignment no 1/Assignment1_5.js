function DisplayFibonacci(iNo) {
    var iNo1 = 0;
    var iNo2 = 1;
    var iNo3;
    while (iNo1 <= iNo) {
        console.log(iNo1);
        iNo3 = iNo1 + iNo2;
        iNo1 = iNo2;
        iNo2 = iNo3;
    }
}
var No = 21;
DisplayFibonacci(No);
