//var is keyword used to declare a variable in JavaScript. It is function-scoped, meaning that the variable is accessible within the function it is declared in and any nested functions. However, it is not block-scoped, which means that if you declare a variable using var 
// inside a block (like an if statement or a for loop),
//  it will be accessible outside of that block as well.

console.log(x);// prints undefined because of the variable is hoisted to the top of the scope but not initialized yet 
var x =10;
var x=20;
x=30;
console.log(x);
// prints 30 as x is re decleared


