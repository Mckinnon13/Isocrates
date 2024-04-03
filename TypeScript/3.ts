let counter: number = 5;
let active: boolean = true ;

//Array 
let ArrayName: string[] = ['A','B','C','D'];


//Object 
let person: {
    name: string;
    age: number;
};
person={
    name:'Arjun',
    age:23
};

let greeting: (name:string)=> string;
greeting = function(name: string){
    return `Hi ${name}`
};
console.log(greeting('Arjun'));
