
function CheckPrime(No1 : number) : boolean
{
    var bFlag : boolean = false
    var Cnt : number = 0

    for(Cnt = 2;Cnt <= No1;Cnt++)
    {
        if(No1 % Cnt == 0)
        {
            bFlag = true
        }
    }
    return bFlag
}

var No : number = 11
var bRet : boolean = true

bRet = CheckPrime(No)

if(bRet == true)
{
    console.log(" It is prime number")
}
else
{
    console.log("It is not prime number");
}