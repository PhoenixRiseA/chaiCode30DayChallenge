// Array creation and access

const arr = [1,2,3,4,5];

console.log(arr);

console.log(arr[0],arr[arr.length - 1]);


// Array methods(Basic)

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();

console.log(arr);

arr.unshift(6);
console.log(arr);

// Array Methods
const newArr = arr.map(ele => ele*2);

console.log(newArr);

const filArr = newArr.filter(ele=>ele>4);
console.log(filArr);

const redArr = filArr.reduce((acc,curr)=>acc+curr,10);
console.log(redArr);

//  Array Iteration 
for(i=0; i< arr.length; i++){
    console.log(arr[i]);
}
arr.forEach(ele=>console.log(ele));

//Multi-dimensional Arrays
const twoDimArr = [[1,2,3],[4,5,6]];
for(let i=0;i< twoDimArr.length; i++){
    for(let j=0;j< twoDimArr[i].length; j++){
       console.log(twoDimArr[i][j]);
    }
}
console.log("Specific",twoDimArr[1][1]);

