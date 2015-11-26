function merge(myArray1, myArray2) {
    var array = [];
    var x1 = 0;
    var x2 = 0;
    while(x1 < myArray1.length || x2 < myArray2.length) {
        if(myArray1[i1] >= myArray2[x2]) {
            array.push(myArray2[x2]);
            x2++;
        } else {
            array.push(myArray1[x1]);
            x1++;
        }
    }
    return array;
}
