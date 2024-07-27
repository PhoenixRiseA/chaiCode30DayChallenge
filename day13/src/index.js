// Activity 1, 2 and 3


function addTwo(a,b){
    return a+b;
};
const person = {
    firstName: 'Lalith',
    lastName: 'Kumar',
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
// module.exports = addTwo;
// module.exports = person;
module.exports = {
    addTwo,
    person
}
