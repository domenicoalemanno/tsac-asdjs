function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    if (this.myarray.length == 0) {
        return true;
    } else {
        return false;
    }
}

function rpn(str) {
    var myArray = str.split(' ');
    var operation = new Stack();
    var expr, op1, op2;
    while(myArray.length > 0) {
        expr = myArray.shift();
        switch (item) {
            case '+':
                op1 = operation.pop();
                op2 = operation.pop();
                operation.push(n2 + n1);
                break;
            case '-':
                op1 = operation.pop();
                op2 = operation.pop();
                operation.push(n2 - n1);
                break;
            case '*':
                op1 = operation.pop();
                op2 = operation.pop();
                operandi.push(n2 * n1);
                break;
            case '/':
                op1 = operation.pop();
                op2 = operation.pop();
                operation.push(n2 / n1);
                break;
            default:
                operation.push(parseInt(expr));
        }
    }
    return operation.pop();
}
