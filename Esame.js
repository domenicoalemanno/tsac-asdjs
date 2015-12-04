function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

// Esercizio 1
function searchNumber(myArray) {
        if(myArray.length == 0) {
            return 0;
        } else {
            if(myArray[0] == 5070) {
                return 1 + searchNumber(myArray.slice(1));
            } else {
                return searchNumber(myArray.slice(1));
            }
        }

}

// Esercizio 2
function megaSum(myArray) {
    return math.sqrt(myArray.filter( x => x % 2 == 0 && x >= 0).map(x => x * x).reduce((acc, x) =>acc + x, 0));
}

// Esercizio 3

function Stack(){
    this.myarray = [];

}

Stack.prototype.push = function (e){ return this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray(this.myarray.length - 1);}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}

function makeExpr(stringa){
    var s = stringa.split(" ");
    var stack = new Stack();
    s.forEach(function (s){
        var x;
        var y;
        switch(s){
            case "+":
                y = stack.pop();
                x = stack.pop();
                stack.push(x + y);
                break;
            case "-":
                y = stack.pop();
                x = stack.pop();
                stack.push(x - y);
                break;
            case "*":
                y = stack.pop();
                x = stack.pop();
                stack.push(x * y);
                break;
            case "/":
                y = stack.pop();
                x = stack.pop();
                stack.push(x / y);
                break;
            default:
                stack.push(parseInt(s));
                break;

        }

    });
    return stack.pop();
}

// Esercizio 4

function Node(it, lt, rt){
    this.items = it;
    this.left = lt;
    this.right = rt;
}
function BST(){
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e){
    if(e < currentNode.items){
        if(currentNode.left == null){
            currentNode.left = new Node(e, null, null);
        }else{
            this.addNode(currentNode.left, e);
        }
    }else{
        if(currentNode.right == null){
            currentNode.right = new Node(e, null, null);
        }else{
            this.addNode(currentNode.right, e);
        }
    }
}


BST.prototype.add = function(e){
    if(this.root == null){
        this.root = new Node(e, null, null);
    }else{
        this.addNode(this.root, e);
    }
}


BST.prototype.existNode = function(currentNode, e){
    if(currentNode == null){
        return null;
    }
    if(currentNode.items == e){
        return currentNode;
    } else {
        if(e > currentNode.items){
            return this.existNode(currentNode.right, e);
        } else {
            return this.existNode(currentNode.left, e);
        }
    }
}
BST.prototype.existTree = function (){
    if(this.root == null){
        return false;
    }else{
        return true;
    }

}
BST.prototype.searchNode = function (e) {
    if(this.existTree()){
        return this.existNode(this.root, e);
    }else{
        return null;
    }
}

function searchMax(node) {
    if (node.right == null) {
        return node.item;
    } else {
        return searchMax(node.right);
    }
}

