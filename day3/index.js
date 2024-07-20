// a1 task 1 
const a = -3;

if(a > 0){
    console.log("positive");
}else if(a<0){
    console.log("negative");
}else{
    console.log(zero);
}

// a1 task  2

const b = 18;

if(b >=18){
    console.log("eligible to vote");
}

// a2 task 1

const c = 3;

if(a>b && a > c){
    console.log("a is greatest of the three");
}else if(b > a && b > c){
    console.log("b is the greatest of the three");
}else{
    console.log("C is the greatest of the three");
}

// a2 task 1
const d = 5

switch (d) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        break;
}
let e = 80;
switch(e){
    case e > 80:
        console.log("A");
        break;
    case e > 70:
        console.log("B");
        break;
    case e > 60:
        console.log("C");
        break;
    case e > 50:
        console.log("D");
        break;
    default:
        console.log("F")
        break;
}

//a4 task 1

d%2 === 0 ? console.log("even") : console.log("odd");

const f = 2022;

if( (f%4 === 0 && !(f%100 === 0)) || f%400 ===0 ){
    console.log(f," is a leap year");
}else{
    console.log(f,"is not a leap year")
}

