function Node (val, next = null, prev = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
}


function DoublyLinkedList () {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.push = (val) => {
    const node = new Node(val);
     if(this.length === 0) {
        this.head = node;
        this.tail = node;
     } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
     }
     this.length++;
}

DoublyLinkedList.prototype.pop = (val) => {
    const temp = this.tail;
     if(this.length === 1) {
        this.head = null;
        this.tail = null;
     } else {
         this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
     }
     this.length++;
}
