const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1 ; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                swapHelperFunction(arr, i , j);
            }
        }
    }
    console.log(arr);
}


const swapHelperFunction = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp;
}

let arr = [1,5,3,6,8,9,0];
bubbleSort(arr);


// alternate solution for better tiem complexity


const bubbleSortBitBetter = (array) => {
   let swapped;
   do{
       swapped = false;
       for(let i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
            swapHelperFunction(array, i, i + 1);
            swapped = true;
        }
      }
   }while(swapped);
}