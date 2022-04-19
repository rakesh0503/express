class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {

    constructor(name, age, gpa) {
        super(name, age)
        this.gpa = gpa;
    }

}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize;
    }
}
let student = new Student("Steve",45,30)
let teacher = new Teacher("bob",39,30)

module.exports.student  = student;
module.exports.teacher = teacher;