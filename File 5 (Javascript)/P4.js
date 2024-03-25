const Numbers = [1,2,[4,5,6,7,8]];
const [yek,dho,[theen,...others]] = Numbers;
console.log(others);
console.log(theen);

//spread
const arr1 = [1,2,3,4];
const arr2 = [...arr1,5,6,7,8];
console.log(arr2);