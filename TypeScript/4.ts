//Type inference

// function add(a,b){
//     return a+b;
// }
// console.log(add(3,5));
// const num = [10,20,30,40,50,60];
// // num.push(50);
// // console.log(num);
// let a = 3;
// let b;
// num.map(i => {
//     b = i*a;
//     console.log(b);
// });

function uppercase(str: string): void{
    console.log(str.toUpperCase())
}
uppercase('Arjun');