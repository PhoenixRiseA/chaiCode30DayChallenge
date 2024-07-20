for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 1; i < 11; i++) {
  console.log(i * 5);
}

let i = 0;
let sum = 0;
while (i++ < 11) {
  sum += i;
}
console.log("sum of 1 to 10", sum);

let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}
let l = 1;
do {
  console.log(l);
  l++;
} while (l < 6);

let n = 1;
let fact = n;

do {
  if (n === 0 || n == 1) {
    fact = 1
  }else if(n ===2){
    fact =2;
  } else {
    fact = fact * (n - 1);
    n--;
  }
} while (n > 2);
console.log("",fact);
let s = ""
for(let i = 1; i< 5; i++){
    
    for(let j =0; j<i; j++){
        s+= "*"  
       
    }
    s+= "\n";
    
}
console.log(s)  


for(let i=0; i<= 10; i++){
    if(i===5){
        continue
    };
    console.log(i);
}
for(let i=1; i<= 10; i++){
    console.log(i) 
    if(i === 7){
        break;
    }
    
}