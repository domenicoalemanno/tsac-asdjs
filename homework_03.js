function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {  
    //this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

function dec2Bin(a) {
        var s1 = new Stack();
        var stringa = "";
        while (a>0) {
        s1.push(a%2);
        a=Math.floor(a/2);    
        }
        while (!s1.isEmpty()){
        stringa += s1.pop().toString()                      
        }                       
     return stringa;                     
}


