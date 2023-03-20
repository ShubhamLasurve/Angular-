
function DisplayFibonacci(iNo : number): void
{
    let iNo1: number = 0
    let iNo2 : number = 1
    let iNo3 

    while(iNo1 <= iNo)
    {
        console.log(iNo1)
        iNo3 = iNo1 + iNo2;
        
        iNo1 = iNo2
        iNo2 =  iNo3 
    }
}
var No : number = 21

DisplayFibonacci(No) 