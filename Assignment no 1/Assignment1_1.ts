
function Maximum(No1 : number[]) : number
{
    var Max : number = No1[0]
    var Cnt = 0
    
    for(Cnt = 0;Cnt < 3;Cnt++)
    {
        if(Max < No1[Cnt])
        {
            Max = No1[Cnt]
        }
    }
    return Max
}

var iNo1 : number[] = [23,89,6]
var iRet : number = 0

iRet = Maximum(iNo1)
console.log("The largest number is : "+iRet);