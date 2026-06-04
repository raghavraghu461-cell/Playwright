//Normal functions
function test()
{
    console.log("Test")
}
test();
console.log("===============");

const fn=function test1()
{
    console.log('functional expression');
}

let result= fn();

//Arrow fucntion
const fn1=()=>console.log("Arrow function");

let res=fn1();

//arrow function should have only parameter,"=>" & actual code inside curly braces

//higher order functions- function which takes another function as paramter and return another function

function run(testFn,testName)
{
    console.log('start');
    let result0= testFn;
    console.log("The End");
    return result;
}

function loginTest()
{
    return "Pass";
}
function loginTestFail()
{
    return 'fail';

}

const result1= run(loginTest);
console.log(result1);


