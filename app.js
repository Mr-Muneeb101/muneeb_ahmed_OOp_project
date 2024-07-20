#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        this.students.push(name);
    }
}
let person = new Person;
const main = async (person1) => {
    do {
        let Userinput = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select Whom you wanna Talk",
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        switch (Userinput.option) {
            case "Staff":
                console.log(`Hello I am talking from staff,Hope You are having a great day?`);
                break;
            case "Student":
                let Student_name = await inquirer.prompt([
                    {
                        name: "S_name",
                        type: "input",
                        message: "please Enter the name of Student",
                    }
                ]);
                let findStudent = person1.students.find((student) => student.name === Student_name.S_name);
                if (findStudent) {
                    console.log(`Hello I am ${findStudent.name}, Are you all Okay!?`);
                }
                else if (!findStudent) {
                    console.log(`Currrent Student List: ${person1.students}`);
                    console.log(`\n\t\t New Student Added \n`);
                    let newStudent = new Student(Student_name.S_name);
                    console.log(`Hello I am ${newStudent.name}, , Are you all Okay!?`);
                    person1.addStudent(Student_name.S_name);
                }
                break;
            case "Exit":
                console.log(`Good Bye`);
                return false;
        }
    } while (true);
};
main(person);
