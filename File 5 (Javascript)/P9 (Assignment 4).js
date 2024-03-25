/*
Assignment 4: [To be completed post training session]
Find the sum of arrays only if the 1st, 4th and 6th term are even numbers and the seventh term is 7
*/

let arr = [12,2,3,4,5,4,7,8];
var sum = 0;
if(arr.length>=7 && arr[0]%2 === 0 && arr[3]%2 === 0 && arr[5]%2 === 0 && arr[6]===7){
    arr.forEach(element => {
        sum += element;
    });
    console.log(sum);
}
else{
    console.log("Try again")
}

