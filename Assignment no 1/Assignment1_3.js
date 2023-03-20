function DisplayFactors(No) {
    var Cnt = 0;
    for (Cnt = 0; Cnt <= (No / 2); Cnt++) {
        if (No % Cnt == 0) {
            console.log(Cnt);
        }
    }
}
var No1 = 20;
DisplayFactors(No1);
