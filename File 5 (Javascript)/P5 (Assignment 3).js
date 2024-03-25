/*
Assignment 3: [To be completed post training session]
Assume there is an array called array1  with values 10,20,30,40 and 50,60, 70 ,80
Write a method to find the sum total of the array
[Note: the values in the array may vary in size]
*/

let arr = [10,20,30,40,50,64,45,24,65,34,24,6,54,34,243564,66534,65,3344];
var sum = 0;
arr.forEach(function(number) {
    sum += number;
  });

console.log(sum);