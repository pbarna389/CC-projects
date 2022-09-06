const person = {
    age: 35,
    logAge: function () {
        console.log(`logAge loggin the person's age: ${this.age}`)
    }
}

function logReferenceObjectsAge() {
    const logAge = person.logAge;
    this.age = person.age;
    logAge(this);
}

console.log("Object's function call");
person.logAge();
console.log("Object's function's reference call");
logReferenceObjectsAge();
