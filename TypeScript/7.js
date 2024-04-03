// oop class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.salaryDate = function () {
        console.log('Salary date is 5th of every month');
    };
    return Company;
}(CompanyLaws));
var Isocrates = new Company();
Isocrates.salaryDate();
