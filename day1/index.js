var x = 1;
let y = "hello";
console.log(x,y)
const z = true;
console.log(z)
const a = [2,3,4];
const b = {hello: " Is it me you're looking for?"}
console.log(typeof(x), typeof(y), typeof(z),typeof(a),typeof(b), typeof b)
y = " Is it me you're looking for?"
console.log(y)

try {
    z = false;
} catch (error) {
    console.log("Error while trying to reassign, the error being",error)
}