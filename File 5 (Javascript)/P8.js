/*
Assignment 3: [To be completed post training session]
Assume there is an array called array1  with values 10,20,30,40 and 50,60, 70 ,80
Write a method to find the sum total of the array
[Note: the values in the array may vary in size]
*/


let arr = [1, 2, 3, 4, 5, 6, 7, 8,32,53];
var sum = add(...arr);
console.log("Sum total of the array:", sum);

function add(...arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}