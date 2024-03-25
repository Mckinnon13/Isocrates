/* Promise */

// let Promise = new Promise(function(resolve,reject){
//     //code
// })

const count = true
let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve("count value received");
    }
    else{
        reject("There is no count")
    }
});
console.log(countValue)


/* 
Promise:
Fulfill: then
reject: catch
*/

let promise1 = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve('Promise resolved')
    }, 5000);
});

async function asynfunc() {
    let result = await promise1;
    console.log(result);
    console.log('Hello');
}
asynfunc();
