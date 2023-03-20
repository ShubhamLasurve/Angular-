
function Area(PI :number, radius: number) : number
{
    let cArea : number = 0;

    cArea = PI * radius * radius

    return cArea
}

var No1 : number = 3.14
var No2 : number = 5
var Ret : number = 0

Ret = Area(No1, No2);
console.log("Area of circle is : "+Ret)
