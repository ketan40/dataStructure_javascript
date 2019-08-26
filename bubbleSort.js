const bubbleSort = (arr) => {
    const swapNumber = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b]
        arr[b] = temp;
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1 ; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                swapNumber(arr, i , j);
            }
        }
    }
    console.log(arr);
}

bubbleSort([1,5,3,6,8,9,0]);