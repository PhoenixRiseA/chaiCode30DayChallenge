// Activity 1: Basic Regular Expressions
const s1 = 'JavaScriptghll;sdJavaScriptgfgsdJavaScriptgfsddgddsJavaScript';
const regex1 = /JavaScript/g;
const matches1 = s1.match(regex1);
const count = matches1 ? matches1.length : 0;
console.log(count);


// task 2 Match all the digits in a string, log the matches

const s2 = 'fdag325ggassg53235g3gss3';
const regex2 = /\d/g;
const matches2 = s2.matchAll(regex2);
const digitsArray = Array.from(matches2, match => match[0]);
const uniqueDigits = [...new Set(digitsArray)];
console.log("Mathched digits", uniqueDigits);

// Activity : Character Classes and Quantifiers

const s3 = 'JavaScript is a Programming Language. Some words like HTML and CSS are also Capitalized.';

const regex3 = /\b[A-Z][a-zA-Z]*\b/g;

const matches3 = s3.matchAll(regex3);;
const CapitalizedWords = Array.from(matches3,match=>match[0]);
console.log("Words starting with a capital letter",CapitalizedWords);

// write a regular expression to match all sequences of one or more digits in a string. log the matches

const s4 = '2342gdrgd43gfdfsg44fgsdgf5645654fgdfg56456456';
const regex4 = /[0-9]+/g;
const matches4 = s4.matchAll(regex4);
const numberSequences = Array.from(matches4,match=>match[0]);
console.log("number sequences",numberSequences.length);

// Activity 3: Grouping and Capturing

// task 5: write a regular expression to capture the area code, 
// central office code, and line number from a US phone number 
// format (eg, ()123 456=7890). log the captures

const phoneNumber = '(123) 456-7890';
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const match5 = phoneNumber.match(regex5);

if(match5){
    const [,areaCode, centralOfficeCode, lineNumber] = match5;
    console.log("Area Code: ",areaCode,"\nCentral Office code",centralOfficeCode,"\nLine number",lineNumber);

}else{
    console.log("Match not found")
}
// task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = 'sailalith@gmail.com';
const regex6 = /^([^@]+)@([^@]+)$/;
const match6 = email.match(regex6);
if(match6){
    const [,address, domain] = match6;
    console.log("address",address,"domain",domain)
}else{
    console.log("No match found")
}

// Assertions and Boundaries
const beginStr = ' Hello world! This is a test';
const regex7 = /^\w+/;
const match7 = beginStr.trim().match(regex7);
console.log("Word begining of the string is:",match7[0]);

const endStr = 'Hello world! This is a test';
const regex8 = /\w+$/;
const match8 = endStr.trim().match(regex8);
console.log("Word at the end of the string is",match8[0]);

const password = 'Namaste@123';
const regex9 = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
console.log(`Password ${password} is valid:${regex9.test(password)}`)

const testUrl = "www.google.com";
const regex10 = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:\d+)?(\/[a-zA-Z0-9._%+-]*)*(\?[a-zA-Z0-9=&%+-]*)?(#[a-zA-Z0-9_-]*)?$/;

console.log(`${testUrl} is a valid url? `,regex10.test(testUrl))


