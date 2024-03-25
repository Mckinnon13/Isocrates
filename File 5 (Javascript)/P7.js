let 

const myObject = {
    name: "Arjun",
    age: 23
};

for(let i in myObject){
    console.log(myObject[i]);
}

arr.forEach(element => {
   console.log(element); 
});

var difference = (a,b) =>{
    return a-b;
}

const num=10

function a(){
    var num=20;
    function b(){
        return num*2;
    };
    function c(){
        return num*3;
    };

    return [b,c];
}

var [func1, func2] = a();
console.log(func1());
console.log(func2());
