function Area(PI, radius) {
    var cArea = 0;
    cArea = PI * radius * radius;
    return cArea;
}
var No1 = 3.14;
var No2 = 5;
var Ret = 0;
Ret = Area(No1, No2);
console.log("Area of circle is : " + Ret);
