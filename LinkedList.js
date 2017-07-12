function LinkedList (){
	var head = null;
    var length = 0;


var Node = function(element){
  this.element = element;
  this.next = null;	
}


this.size = function(){
	return length;
}

this.head = function(){
return head;
}

this.add = function(element){
 var node = new Node(element);
 
 if(head === null){
 	head = node;
 }
else{
   var currentNode = head;
   while(currentNode.next){
   	currentNode = currentNode.next;
   }
   currentNode.next = node;

}

length++ ;

}


this.getIndex = function(element){
    var currentNode = head;
      var index = 0;
    if(currentNode.element === element){
    	return index;
    }
    else{
    	while(currentNode.element !== element){
    		currentNode.next = currentNode;
    		index++
    	}
    	return index;
    }
}




}

var createdLinkedList = new LinkedList();

createdLinkedList.add("ketan");
createdLinkedList.add("value");
createdLinkedList.add("finalValue");
var myCode = createdLinkedList.getIndex("finalValue");
console.log(myCode);
