var isUnivalTree = function(root) {
    let resultArray = [];
   const dfs = (tree) => {
       if(tree !== null) {
           resultArray.push(tree.val);
           dfs(tree.left);
           dfs(tree.right);
       }
   }
  
   dfs(root);
   for(let result of resultArray) {
       if(result !== resultArray[0]) {
           return false;
       }
   }
   return true;
};