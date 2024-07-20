// tempate lierals

const person = {
    name: 'Nandini',
    age: '50'
}
console.log(`Name: ${person.name} \nAge: ${person.age}`);

const arr = [1,2,3,4];
const [ele1, ele2] = arr;
console.log(ele1, ele2);

const book = {
    title: "The fall",
    author: "optimus"
};
const { title, author } = book;
console.log(title, author);

// Spread and Rest operators

const newArr = [...arr, 5,6,7];
console.log(newArr);

const restFn = (...args) =>{

    let sum = args.reduce((acc,curr)=>acc+curr,0);
    return sum;
};
console.log( restFn(3,4,5,5));

// Default parameters

const twoPara = (x,y=1) =>{
    return x*y;
}
console.log(twoPara(4));

// Enhanced Object Literals

const getCar = (name,model, year) =>{
    return {
        name,
        year,
        sayModel(){
            return model
        }
    }
};
const objLil = getCar('mahindra','w8','2023');
console.log( objLil.name, objLil.sayModel() );
let i = 0;
const compObj = {
 ["name" + ++i]:"Apple",
 ["name" + ++i]: "Google",
 ["name" + ++i]: "Microsoft"
}
console.log(compObj["name2"])