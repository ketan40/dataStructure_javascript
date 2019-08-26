const quickSort = (items,left, right) => {
    let index;
    if(items.length <= 1) {
        return items;
    }
   index = getPartitionIndex(items, left, right);
   if(index < left - 1) {
    quickSort(items,left, index - 1);
   }
   if(index < right) {
    quickSort(items,index, right);
   }
   console.log(items);
 return items;
}

const getPartitionIndex = (items, left, right) => {
     let mid = Math.floor((left + right) / 2);

     while(left <= right) {
           while(items[left] < items[mid]){
               left++;
           }
           while(items[right] > items[mid]) {
               right--;
           }        
           if(left <= right){
               swapHelperFunction(items, left, right);
               left++;
               right--;
           }
     }
     return left;
}

const swapHelperFunction = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp;
}


quickSort([23,4,6,7,2,5], 0, [23,4,6,7,2,5].length - 1);