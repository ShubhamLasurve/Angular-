
function DisplayFactors(No : number): void
{
    var Cnt : number = 0

    for(Cnt = 0; Cnt <= (No/2); Cnt++)
    {
        if(No % Cnt == 0)
        {
            console.log(Cnt)
        }
    }
}

var No1 : number = 20

DisplayFactors(No1)