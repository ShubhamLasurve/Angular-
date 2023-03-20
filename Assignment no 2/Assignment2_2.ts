
function Summation(Arr : number[]) : number
{
    let iSum : number = 0
    let iCnt : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        iSum = iSum + Arr[iCnt]
    }
    return iSum
}

var Arr : number[] = [23,6,7,4,5,7]
var iRet : number = 0

iRet = Summation(Arr)
console.log("The summation is : "+iRet)