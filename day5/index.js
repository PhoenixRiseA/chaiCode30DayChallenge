// Function declaration

function checkOddEven(x){
    if(x%2 === 0) console.log("even");
    else console.log("odd")
}
checkOddEven(3);
function square(x) {
    return x**2;
}
console.log(square(4));

// function expression

const maxBetweenTwoNumbers = function(x,y){
    if(x > y) console.log(x);
    else console.log(y);
}
maxBetweenTwoNumbers(4,3);

const concTwoStrings = function(x,y){
    return x+y;
}
console.log(concTwoStrings("hello! ","How are you?"));

// Arrow functions

const sumOfTwo = (x,y) => {
    return x+y;
};

const checkStrigChar = (s,c) =>{
    return s.includes(c);
}
console.log(checkStrigChar("Hello","x"));

// function parameters and default values

const product = (x,y) => x*y;
console.log(product(5,4))

const printBio = (name,age)=>{
    console.log(`Person's Name is ${name} and age is ${age}`)
};
printBio("Nandini",50);

// Higher Order Functions

const hFunc = (x,n)=>{
    let i = n;
    while(i > 0){
        x(i);
        i--;
    }
};
const sFunc = (i) =>{
    console.log("innner function 1",i)
}
hFunc(sFunc,5);
const addOne = (x)=>{
    return x +1;
};
const addTwo = (y)=>{
    return y + 2;
}
const hFunc2 = (x,y, value) =>{
    let i = 7;
    const valueTwo = x(value);
    const result = y(valueTwo);
    console.log(result)
}
hFunc2(addOne,addTwo,5);
