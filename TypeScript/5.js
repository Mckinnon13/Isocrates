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
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    console.log(total);
}
sum(1, 3, 5, 6, 3);
