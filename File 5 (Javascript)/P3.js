var dish = readline.question("What is the dish name?");

let dishType;
switch(dish){
    case 'idli':
        dishType = 'South Indian';
        break;
    case 'pizza':
        dishType = 'Italian';
        break;
    default:
        dishType = 'Unkown'
}

console.log(`${dish} is ${dishType} cusine`);
