const mergeSort = (unsortedArr) => {
     if(unsortedArr.length <= 1) {
         return unsortedArr;
     }

     const mid = Math.floor(unsortedArr.length/ 2);
    return  merge(mergeSort(unsortedArr.slice(0, mid)), mergeSort(unsortedArr.slice(mid)));
}

const merge = (left, right) => {
    let leftIndex = 0; rightIndex = 0, resultArray = [];

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    console.log(resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex)));
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
    

}

let arr = [1,5,3,6,8,9,0];
mergeSort(arr);