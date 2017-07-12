//created by Ketan Deshmukh
// on jul 11 2017



//creating a node for trie
function Node(data) {
    
    this.children = {};
    this.prefix = 0;
    this.data = data;
    this.isWord = false
     
};

//creating a trie root 
function Trie(){
	
	this._root = new Node('');

};


Trie.prototype.add = function(word){

    if(!this._root){
    	return null;
    }
    this._addNode(this._root,word);


}


Trie.prototype._addNode = function(node, word){
      
      this.prefix++;

      if(!node || !word) {
          return null;
       }

       var letter = word.charAt(0);
       var child = node.children[letter];
       if(!child){
	       	child = new Node(letter);
	       	node.children[letter] = child;
       } 
        var remainder = word.substring(1);
	   
	    if(!remainder) {
		    child.isWord = true;
		 }
	   this._addNode(child, remainder);
}



var trie = new Trie();

trie.add("one");
trie.add("I had");
trie.add("two");

console.log()
