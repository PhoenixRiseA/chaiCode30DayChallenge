// Activity 1: sorting algorithms

// Task1 bubble sort
// what is a bubble sort? ans: It is a simple sorting algo that repeatedly goes
// through the list, compares adjacent elements
// const arr = [3, 2, 5, 6, 1, 8, 4];

// const bubleSort = (arr)=>{
//     if(!arr.length) return;
//     let swapped = true;
//     let n = arr.length;
//     while(swapped){
//         swapped = false;
//         for(let i=0; i< n;i++){
//             let j= i+1
//             if(arr[i] > arr[j]){
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//                 swapped = true;
//             }
//         }
//         n--;
//     }
//     return arr;
// };
// console.log("Bubble sort",bubleSort(arr));

// Selection sort Algo:  It is a simple comparision based sorting algorithm. It works by dividing
// input list into two parts, a sorted list and unsorted list, initially the sorted list is empty and unsorted list is the whole
// input array, The algorithms proceeds by finding the smallest unsorted element and swapping it
// with leftmost unsorted element and moving the sublist boundaries to the right by one

// const selectionSort = (arr) =>{
//     console.log(arr);
//     const n = arr.length;
//     for(let i=0;i< n-1; i++){
//         let minIndex = i;
//         for(let j=i+1; j<n; j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i){
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// };
// console.log("Selection sort",selectionSort(arr));

// task 3: quicksort algorithm to sort an array of numbers in ascending order.

// It is a highly efficient sorting algorithm, It employs a divide and conquer strategy
// The basic idea is to select a pivot element and partition the list into two sub-arrys
// according to whether they are less than or greater than the pivot. The sub-arrays are the sorted
// recursively
// const quicksort = (arr) =>{
//     if(arr.length <=1) return arr;
//     let leftArr = [];
//     let rightArr = [];
//     const pivot = arr[0];
//     for(let i=1; i< arr.length; i++){
//         if(arr[i]< pivot){
//             leftArr.push(arr[i]);
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quicksort(leftArr),pivot,...quicksort(rightArr)]
// }
// console.log("Quick sort", quicksort(arr))

// Activity 2:  Searching Alorithms
// const linearSearch = (arr,target) =>{
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] ===  target) return i;
//     }
// }
// console.log("linear Search output for: ",arr,"is: \n",linearSearch(arr,4));

const sortedArr = [22, 33, 55, 66, 77, 88, 102, 112, 124];

// const recurBinSearch = (sortedArr,target) =>{

//     const helper = (l,r) =>{
//         if(l > r) return -1;
//         const mid = Math.ceil((l+r)/2);
//         console.log(l,r,mid,sortedArr[mid],target)
//         if(sortedArr[mid] === target){
//             return mid;
//         }
//         if(sortedArr[mid] > target){
//             return helper(l,mid-1);

//         }else if(sortedArr[mid] < target){

//            return helper(mid+1,r);
//         }

//     }
//     const index = helper(0,sortedArr.length );
//     return index;
// };
// console.log("The index of the target is: ",recurBinSearch(sortedArr,55));

// String Algorithms

// const s = 'gasdgasdhsghajghajfgjka';

// const numberOfOccurrences = (s) =>{
//     let occurencesMap = {};
//     for(i=0; i< s.length; i++){
//         if(occurencesMap[s[i]]){
//             occurencesMap[s[i]] +=  1;
//         }else{
//             occurencesMap[s[i]] = 1;
//         }
//     }
//     return occurencesMap;
// }
// console.log("The no of occurencees of each harater in a string is: ",numberOfOccurrences(s));
// const s = "abfsabdgddghjkkutnr";
// const longestSubstring = (s) => {
//   let substringMap = {};

//   const helper = (s) => {
//     let visited = {};
//     let tempStr = "";
//     for (let i = 0; i < s.length; i++) {
//       if (!visited[s[i]]) {
//         visited[s[i]] = true;
//         tempStr += s[i];
//       } else {
//         substringMap[tempStr] = tempStr.length;
//         return helper(s.substring(1));
//       }
//     }
//     return substringMap;
//   };
//   const strMap = helper(s);

//   const findLongestStrFromMap = (sm) => {
//     let max = {key:0,value:Number.MIN_SAFE_INTEGER};
//     for (let [key, value] of Object.entries(sm)) {
//       console.log(key, value);
//       if (value> max.value) {
//         max.value = value;
//         max.key = key;

//       }
//     }
//     return max;
//   };
//   return findLongestStrFromMap(strMap).key
// };
// console.log(
//   "The longest substring without occurences is: ",
//   longestSubstring(s)
// );

// Activity 4: Write a fucntion to rotate an array by k positions. Log the rotated array.
// const unroratedArray = [1,2,3,4,5,6,7,8]
// const rotateTheArray = (arr, k) => {
//     if (k === 0) return arr;

//     while (k > 0) {
//         arr.unshift(arr.pop()); // Rotate the array by popping and unshifting
//         k--;
//     }
    
//     return arr;
// }
// console.log("rotate array result: ",rotateTheArray(unroratedArray,13))

// task 9: Write a function to merge two sorted arrays into inoe ssorted array. Log the merged array.

// const mergeTwoSortedArrayFn = (a1, a2) =>{
//     let mergeArray = [];
//     let i=0, j=0;
//     while( i < a1.length && j< a2.length){
//         if(a1[i] < a2[j] ){
//             mergeArray.push(a1[i]);
//             i++;
//         }else if(a1[i] > a2[j]){
//             mergeArray.push(a2[j]);
//             j++;
//         }
//     }
//     while(i < a1.length){
//         mergeArray.push(a1[i]);
//         i++;
//     }
//     while(j < a2.length){
//         mergeArray.push(a2[j]);
//         j++;
//     }
//     return mergeArray
// }
// console.log("merge two sorted array result: ",mergeTwoSortedArrayFn([1,3,5,7],[2,4,6,8]));

// Acitivity 5: Dynamic Programming: It is a method of solving complex problems by breaking them down
// to smaller subproblems, there are two approaches, memoization and tabulation

// task 10:  Write a function to solve the fibonacci sequence using dynamic programming. 

// memoization approach 
const fibonacciMemo = (n, memo={}) =>{
    if(n<=1) return n;
    if(memo[n]) return memo [n];
    memo[n] = fibonacciMemo(n-1,memo) + fibonacciMemo(n-2,memo);

    return memo[n];
}
console.log('Fibonacci memoization: ',fibonacciMemo(10));

const fibonacciTab = (n) =>{
    if(n<=1) return n;
    let fib = [0,1];
    for(let i=2;i<=n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
};
console.log("fibonaci tabulation: ",fibonacciTab(10))