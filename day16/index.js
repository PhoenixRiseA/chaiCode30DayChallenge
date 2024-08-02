// const fact = (n) => {
//   if (n === 0 || n === 1) return 1;
//   let factorial = n * fact(n - 1);
//   return factorial;
// };
// console.log(fact(5));

// const fibonacci = (n) => {
//   if (n < 0) throw new Error("Negative input not allowed");
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const memoizedFibonacci = () => {
//   const cache = {};
//   return (n) => {
//     if (n < 0) throw new Error("Negative input not allowed");
//     if(n in cache) return cache[n];
//     if (n === 0) {
//       cache[n] = 0;
//     } else if (n === 1) {
//       cache[n] = 1;
//     } else {
//       cache[n] = memoizedFibonacci()(n - 1) + memoizedFibonacci()(n - 2);
//     }
//     return cache[n]
//   };
// };
// const memFib = memoizedFibonacci();
// console.log("fibonacci",memFib(7));
// console.log(memFib(30));
// console.log(memFib(9));
// console.log(memFib(30))

// // Activity  recursion with Arrays

// let arr = [1,3,45,64,64,334,689, 67];

// const sumRecur = (arr) =>{
//     if(arr.length === 0) return 0;
//     return arr[0] + sumRecur(arr.slice(1))

// }
// console.log("Recursive sum of array",sumRecur(arr))

// const maxEleRecur = (arr)=>{
//     if(arr.length === 1) return arr[0];
//     const maxOfRest = maxEleRecur(arr.slice(1));
//     return maxOfRest > arr[0] ? maxOfRest : arr[0];
    
// };
// console.log("Max element in the array is: ",maxEleRecur(arr));

// // Acitivity 3: String manipulation with Recursion

// const str = "jagadamba";

// const reverseString = (str) =>{
//     // if(str.length === 1) return str[0];
//     // const rStr =  str[str.length - 1] + reverseString(str.slice(0,str.length -1));
//     // return rStr;
//     const helper = (str,acc)=>{
//         if(str.length === 0) return acc;
//         return helper(str.slice(0,-1),acc+str[str.length - 1])
//     }
//     return helper(str,'');
// }
// console.log(`Revers of ${str} is: `,reverseString(str))

// const validPalindrome = (str) =>{
//     const helper = (left, right)=>{
//         if(left >= right) return true;
//         if(str[left] !== str[right]) return false;
//         return helper(left+1, right-1);
//     }
//     return helper(0, str.length -1);
// }
// console.log(`is ${str} a valid palindrome `,validPalindrome(str));
// const palin = 'racecar';
// console.log(`is ${palin} a valid palindrome`,validPalindrome(palin))

// // Activity 4: write a recursive function to perform a binary serach on a sorted array. Log the index of the target element for a few test cases.
const sortedArr = [3,5,6,7,22,33,57];
const recurBinSearch = (sortedArr,target) =>{

    const helper = (l,r) =>{
        if(l >= r) return -1;
        const mid = Math.ceil((l+r)/2);
        console.log(mid,sortedArr[mid],target)
        if(sortedArr[mid] === target){
            return mid;
        }else if(sortedArr[mid] > target){
            return helper(l,mid-1);
        }else if(sortedArr[mid] < target){
            return helper(mid+1,r);
           
        }
        

    }
    const index = helper(0,sortedArr.length );
    return index;
};
console.log("The index of the target is: ",recurBinSearch(sortedArr,7));

// //  write a recursive funciton to count the occurrences of a target element in an arrya .
// const cntArry = [1,23423,3,3,3,3,5,6,3,2,2,1,5,55,55,66,4]
// const numberOfOccurences = (cntArry,target)=>{
//     const cache = {};
//     const helper = (i)=>{
//         if(i >= cntArry.length) return cache[target]
//         if(cache[target] && cntArry[i]=== target){
//             cache[target] += 1;
           
//         }else if(!cache[target] && cntArry[i]=== target){
//             cache[target] = 1;
//         }

//         return helper(i+1)

        
//     }
    
//     return helper(0)
// }
// console.log("number of occurences of 5 ",numberOfOccurences(cntArry,5));

// Activity 5: Tree Traversal

// Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they visited

class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
   
}
function  inOrderTraverSal(node){
    if(!node) return;
    inOrderTraverSal(node.left);
    console.log(node.data,end=", ");
    inOrderTraverSal(node.right)
}
function depthOfBinaryTree(node){
    if(!node) return 0;
    const leftDept = depthOfBinaryTree(node.left);
    const rightDept = depthOfBinaryTree(node.right);
    return Math.max(leftDept,rightDept) + 1;

}
let root = new TreeNode('R');
let nodeA = new TreeNode('A');
let nodeB = new TreeNode('B');
let nodeC = new TreeNode('C');
let nodeD = new TreeNode('D');
let nodeE = new TreeNode('E');
let nodeF = new TreeNode('F');
let nodeG = new TreeNode('G');
root.left = nodeA
root.right = nodeB
nodeA.left = nodeC;
nodeA.right = nodeD;
nodeB.left = nodeE;
nodeB.right = nodeF;
nodeF.left = nodeG;
inOrderTraverSal(root);
console.log("Dept of binary tree is: ",depthOfBinaryTree(root))


