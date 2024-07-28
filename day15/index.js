// Activity 1

const outerFn = () => {
  const outerVar = 4;
  return function innerFn() {
    console.log(outerVar);
  };
};
outerFn()();

const counterFn = () => {
  let counter = 0;
  return function privateFn() {
    counter += 1;
    return counter;
  };
};
const updateCnt = counterFn();
let counter = [updateCnt(), updateCnt(), updateCnt(), updateCnt()];

console.log(counter[counter.length - 1]);

// Acitvity 2

// write a function that generates unique ID's. Use a closure to keep track
// of the last generated ID and increment it with each call.
const uniqueIdGen = () => {
  let uniqueId = Math.random().toFixed(5) * 100000;
  console.log("Unique id", uniqueId);
  return function innerFn() {
    uniqueId += 1;
    return uniqueId;
  };
};
const uniqueIdIncrementor = uniqueIdGen();
console.log("Incremented id", uniqueIdIncrementor());
console.log("Incremented id", uniqueIdIncrementor());
console.log("Incremented id", uniqueIdIncrementor());

const userNameFn = () => {
  const username = "LalithRockzzz";
  return function greeting() {
    console.log(`Welcome ${username}! from the innerfn greeting`);
  };
};
userNameFn()();

//Activity 2,  closures in loops

const arrayOfFns = [];
for (let i = 0; i < 5; i++) {
  arrayOfFns[i] = () => {
    console.log(i);
  };
}
arrayOfFns[1]();
arrayOfFns[4]();

// Acitivity 4

const createItemManager = () => {
  let items = [];
  return {
    addItem: (item) => {
      items.push(item);
      console.log(items);
    },
    removeItem: (item) => {
      const index = items.indexOf(item);
      if (index > -1) {
        items = [...items.splice(index, 1)];
        console.log(`${item} removed`);
      } else {
        console.log(`${item} not found`);
      }
    },
    listItems: () => console.log("Items: ", items),
  };
};
const itemManager = createItemManager();
itemManager.addItem("One");
itemManager.addItem("two");
itemManager.addItem("three");
itemManager.addItem("four");
itemManager.listItems();
itemManager.removeItem("three");
itemManager.listItems();

// Acitvity 5: Memoization
const memoizedFn = () => {
  let cache = {};
  return (n) => {
    if(cache[n] !== undefined) return cache[n];
    console.log('In loop')
    let sum = 0;
    for (let i = n; i > -1; i--) {
        sum += i;
    };
    cache[n] = sum;
    
    return sum;
  };
};
const firstMemoisedFn = memoizedFn();
console.log(firstMemoisedFn(5));
console.log(firstMemoisedFn(6));
console.log(firstMemoisedFn(5));

const factMemoizedFn = () =>{
    let cache = {};

    return function fact(x) {
        if(x < 0) throw new Error("negative values not allowed");

        if(x in cache) return cache[x];
        
        console.log("calculating factorial of ",x);

        if(x ===0 || x===1){
            cache[x] = 1;
        }else{
            cache[x] = x*factMemoizedFn()(x-1)
        }
        return cache[x]
    }
}
const firstFactMemoizedFn = factMemoizedFn();
console.log(firstFactMemoizedFn(5));
console.log(firstFactMemoizedFn(6));
console.log(firstFactMemoizedFn(5));
console.log(firstFactMemoizedFn(5));
console.log(firstFactMemoizedFn(5));