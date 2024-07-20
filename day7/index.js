// Object creation and access

const obj = {
    title: "The wallow",
    author: "Lalith",
    year: "2024",
};
console.log(obj);

console.log(obj.title,"Authored by: ", obj.author);

// Object Methods

obj.details = function (){
    return this.title + " authored by: " + this.author
};
console.log(obj.details());

obj.updateYear = function(newYear){
    this.year = newYear;
    
};
obj.updateYear(2025)
console.log(obj.year);

// Nested Objects

const nesObj = {
    name: "Library 1",
    books: [{
        title: "The wallow",
        author: "Lalith",
        year: "2024",
    },{
        title: "The hallow",
        author: "Lalith",
        year: "2024",
    }]
}
console.log(nesObj.books, nesObj.name);


// The this  keyword
obj.yearDetails = function (){
    return this.title + " " + this.year;
};
console.log(obj.yearDetails());

// Object iteration
for(x in obj){
    console.log(x);
};

console.log( Object.keys(obj), Object.values(obj))
