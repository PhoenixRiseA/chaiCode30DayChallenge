class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = "Custom Error";
    }
}
async function main() {
    console.log("running");
 
    try {
        throwErrorFn();
    } catch (error) {
        console.log(error.message)
    }


    try {
        errorIfRemIsZero(5,0);
    } catch (error) {
        console.log(error.message)
    }

    // Finally block
    try {
        console.log("In try 1")
    } catch (error) {
        console.log("In catch")
    } finally{
        console.log("finally block")
    }
    try {
        errorWithCustomClass();
    } catch (error) {
        console.log("in main a custom error occurred ",error.name,error.message);
    }
    try {
        if(!validateInput("")) throw new CustomError("Input is invalid")
    } catch (error) {
        console.log(error.message,error.name)
    }

    // task 6
    const randomPromise = new Promise((resolve, reject)=>{
        const randomNum = Math.random().toFixed(2)*100;
        if(randomNum%2=== 0) resolve(`Resolved with no: ${randomNum}`)
        else reject(`Rejected with no: ${randomNum}`)
    });
    randomPromise.then((res)=>{
        console.log(res);
    }).catch((rej)=>{
        console.log(rej);
    })
    try {
       const msg = await randomPromise;
       console.log(msg);
    } catch (error) {
        console.log("Error msg",error)
    }

    // Graceful Error handling in fetch
    fetch("www.ettqrwert.gsaag/gas").then(res=>console.log(res)).catch((error)=>{
        console.log("Invalid url")
    })

    try {
       await fetch("www.ettqrwert.gsaag/gas")
    } catch (error) {
        console.log('invalid')
        console.log("The fetch error is",error.message)
    }


};


const validateInput = (inp) =>{
    inp = String(inp)
    return inp.length > 0;
}
const throwErrorFn = () =>{
    throw new Error("Error thrown intentionally");
};
const errorIfRemIsZero = (a,b)=>{
    if(b===0) throw new Error("Denominator is zero");
    return a/b;
};
const errorWithCustomClass = () =>{
    throw new CustomError("Throwing error with customm error class")
}
main();

