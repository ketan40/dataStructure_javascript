										var queue = function(){

										   this._newIndex = 0;
										   this._oldIndex = 0;
										   this.storage = {};

										}

										//returning length of the queue
										queue.prototype.length =  function(){
										 
										 return this._newIndex - this._oldIndex;  

										}

										//adding elements into the queue
										queue.prototype.enqueue =  function(param){
											this.storage[this._newIndex] = param;
											this._newIndex++;
										}

										//removing elements froom the queue
										queue.prototype.dequeue = function(){
										   
										   if(this._newIndex === 0){
										   	return undefined;
										   }
										   else{
										   	delete this.storage[this._oldIndex];
										   	this._oldIndex++;
										   }

										}




										//creating a new instance of the contructor object

										var queue1 = new queue();
										queue1.enqueue("ketan1");
										queue1.enqueue("ketan2");
										queue1.enqueue("ketan3");



										queue1.dequeue();

										console.log(queue1.storage, queue1.length());
