//optional parameter: function
// function greet(name?:string): void{
//     if(name){
//         console.log(`Hello ${name}`);
//     }else{
//         console.log("Hello new user");
//     }
// }
// greet();
// greet('Arjun');

//Default parameters
// function greet1(name:string = "Arjun"): void{
//     if(name){
//         console.log(`Hello ${name}`);
//     }else{
//         console.log("Hello new user");
//     }
// }
// greet1();

//Rest
function sum1(...numbers: number[]): void{
    let total = 0;
    for(let num of numbers){
        total+=num;
    }
    console.log(total);
}

sum1(1,3,5,6,3)