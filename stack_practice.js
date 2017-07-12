var stack = function() {
    this.storage = {};
    this.count = 0;
}




//function for pushing into a stack
stack.prototype.push = function(param) {

     this.storage[this.count] =  param;
          this.count++;

}

//function for popping out the values
stack.prototype.pop =  function(){
	this.count--;
	delete this.storage[this.count];
}


//function to return length of the stack
stack.prototype.length = function(){
	return this.count;
}

//creating new instance of the stack object
var stack1 = new stack();
stack1.push("ketan");
stack1.push("ketan1");
stack1.push("ketan2");
stack1.push("ketan3");
var stackValue = stack1.pop();
console.log(stack1.length());