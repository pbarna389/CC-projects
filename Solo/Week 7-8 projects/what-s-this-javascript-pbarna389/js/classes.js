class Person {
    age = 35

    logAge() {
        return this.age
    }

    logAgeArrow = () => {
        return this.age
    }
}

const object = new Person();

console.log("Simple function declaration in class");
const defaultfunction = object.logAge();
console.log(defaultfunction)
console.log("Arrow function declaration in class");
const ArrowFunction = object.logAgeArrow;
console.log(ArrowFunction());