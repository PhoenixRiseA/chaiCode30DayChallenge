// Activity 1 Class definition
class Person {
    constructor(name='',firstName='',lastName='', age=0){
        this.name = name
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greeting(){
        console.log("Welcome: ",this.name," ", this.age)
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(this.age);
    }
    static species(){
        return "I am a  Person"
    }
    get fullName(){
        return this.firstName + " " + this.lastName
    }
    set fullName(name){
        const [firstName,lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
};
const person1 =  new Person("Lalith","Lalith","Kumar",31);
person1.greeting();

person1.updateAge(30);

// Activity 2 Class Inheritance

class Student extends Person{
    static numberOfStudents = 0;
    constructor(name, age,studentId){
        super(name,age)
        this.studentId = studentId;
        Student.numberOfStudents += 1;
    }
    getStudentId(){
        return this.studentId;
    }
    greeting(){
        console.log(`Welcome ${this.name} (${this.studentId})`)
    }
}

const student1 = new Student('Yamini',22,'1sdfa');
const student2 = new Student('Anusha',22,'gdasdasg')
console.log(student1.getStudentId());
student1.greeting();

console.log(Person.species());
console.log(Student.numberOfStudents);

console.log(person1.fullName)
person1.fullName = "Brihest Sharma";
console.log(person1.fullName);

class Account{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }
    deposit(x){
        this.#balance += x;
        console.log(this.#balance);
    }
    withDraw(x){
        this.#balance -= x;
        console.log(this.#balance);
    }
}
const account1 = new Account(50000);
account1.deposit(5000);
account1.withDraw(3000);






