
function CheckArmstrong(iNo : number) : boolean
{
    let iDigitCount : number = 0;
    let iTemp : number = iNo
    let iDigit : number = 0;
    let iCnt : number = 0;
    let iPower : number = 1;
    let Sum : number = 0;

    while(iTemp != 0)
    {
        iDigitCount++
        iTemp = iTemp / 10
    }

    iTemp = iNo

    while(iTemp != 0)
    {
        iDigit = iTemp % 10;

        for(iCnt = 0;iCnt <= iDigitCount; iCnt++)
        {
            iPower = iPower * iDigit;
        }
        Sum =  Sum + iPower
        iPower = 1

        iTemp = iTemp / 10;
    }

    if(Sum == iNo)
    {
        return true
    }
    else
    {
        return false
    }
}

var No : number =370

var bRet : boolean = false

bRet = CheckArmstrong(No)
if(bRet == true)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not an Armstrong number");
}