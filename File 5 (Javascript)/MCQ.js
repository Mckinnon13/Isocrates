var num = 10;
function outerFunction() {
    var num = 20;
   
    var innerfunction = function(){
        return num * 2;
    };


    var innerfunction2 = () => {
        return num * 3;
    };


    return [innerfunction,innerfunction2];
}
var [func1,func2] = outerFunction();
console.log(func2());
console.log(func1());
