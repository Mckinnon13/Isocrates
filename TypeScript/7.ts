// oop class

// class Person{
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hi my name is ${this.name} and I'm ${this.age} years old `);
//     }
// }

// let person = new Person('Arjun',49);
// person.greet();


// class Employee{
//     private salary: number;
//     readonly hikePercentage: number = 0.15;

//     constructor(){
//         this.salary = 20000;
//     }

//     hike(){
//         this.salary = this.salary+this.salary*this.hikePercentage;
//         return this.salary;
//     }

//     getSalary(): number{
//         return this.salary;
//     }

//     setSalary(amount: number):void{
//         this.salary = amount;
//     }
// }

// // oop inheritence
// class BI extends Employee{
//     bonus(){
//         console.log("I got yearly Bonus");
//     }
// }


// let abc = new BI();
// abc.setSalary(50000);
// console.log(abc.getSalary());
// console.log(abc.hike());
// abc.bonus();


//Abstract class
abstract class CompanyLaws{
    abstract salaryDate(): void;
}

class Company extends CompanyLaws{
    salaryDate(): void {
        console.log('Salary date is 5th of every month');
    }
}

let Isocrates = new Company();
Isocrates.salaryDate();