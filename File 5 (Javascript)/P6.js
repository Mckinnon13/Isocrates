//Spread operator
const obj1 = {Name: 'Rakesh', EMPID: 123}
const obj2 = {Name1: 'Suresh', EMPID1: 244}
const obj3 = {...obj1,...obj2}
console.log(obj3);

const str = "Hello";
const charArr = [...str];
console.log(charArr);