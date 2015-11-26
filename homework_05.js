function QueueItem(c,p) {
    this.content = c;
    this.priority = p;
}
function PriorityQueue() {
    this.myArray = [];
}
PriorityQueue.prototype.enqueue = function(e) {
               var quit=false;
               var i=0;
               if(!this.isEmpty()) {
               	while (!quit) {
               	 if(i>=this.size()) {
                  quit=true;
                 } else if (this.array[i].priority > e.priority) {
                     quit = true;
                   } else {
                       i++;
                     }
                }
                  this.myArray.splice(i, 0, e);
               } else {
                    this.myArray.push(e);
		  }
	}

PriorityQueue.prototype.dequeue = function() {return this.array.pop();}
PriorityQueue.prototype.front = function() {return this.array[this.array.length-1];}
PriorityQueue.prototype.size = function() {return this.array.length;}
PriorityQueue.prototype.isEmpty = function() {return this.size()==0}

function PriorityQueueCallback(function)
{
    this.f = function
    this.myArray = [];
}
PriorityQueueCallback.prototype.enqueue = function(e) {
               var quit=false;
               var i=0;
               if(!this.isEmpty()) {
                   while (!quit){
                       if(i>=this.size()) {
                            quit=true;
                        } else if (this.f(this.myArray[i].priorita, e.priorita)==1) {
                             quit = true;
                          } else {
                             i++;
                           }
                    }
                      this.myArray.splice(i, 0, e);
                } else {
                    this.myArray.push(e);
		  }
      }

PriorityQueueCallback.prototype.dequeue = function() {return this.array.pop();}
PriorityQueueCallback.prototype.front = function() {return this.array[this.array.length-1];}
PriorityQueueCallback.prototype.size = function() {return this.array.length;}
PriorityQueueCallback.prototype.isEmpty = function() {return this.size()==0}

function CircularQueue(m)
{
    this.i = 0;
    this.max = m;
    this.myArray = [];
}
CircularQueue.prototype.enqueue = function (e) {
                                                if(this.size()<this.max) {
                                                    this.myArray.splice(this.iterator,0,e);
                                                    this.i++;
                                                    if(this.i>=this.max) {
                                                        this.i=0;
                                                    }
                                                }
                                              }
CircularQueue.prototype.dequeue = function() {
                                                var circle = this.myArray[this.i];
                                                this.myArray.splice(this.i,1,null);
                                                return circle;
                                            }

CircularQueue.prototype.front = function() {return this.array[this.array.length-1];}
CircularQueue.prototype.size = function() {return this.array.length;}
CircularQueue.prototype.isEmpty = function() {return this.size()==0}
