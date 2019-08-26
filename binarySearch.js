// iterative process
const binarySearch = (arr, findVal) => {
    if (arr.length) {
        let start = 0; end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === findVal) {
                console.log(true);
            }
            if (arr[mid] < findVal) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
}

// binarySearch([1, 4, 6, 44, 7], 44);
// O(1) = space complexity O(log(N)) time complexity

// recursive process


const recursiveBinarySearchSolution = (arr, findVal, start, end) => {

    // base case    
    if (start > end) {
        return false;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === findVal) {
        console.log(true);
    }
    if (arr[mid] > findVal) {
        recursiveBinarySearchSolution(arr, findVal, start, mid - 1);
    } else {
        recursiveBinarySearchSolution(arr, findVal, mid + 1, end);
    }
}
let arr = [1, 4, 6, 44, 7];
recursiveBinarySearchSolution(arr, 44, 0 , arr.length - 1);
// O(logN) = space complexity O(log(N)) time complexity