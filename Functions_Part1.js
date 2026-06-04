//functions are of 4 types
//without argument & return value
//with argument and no return value
//with argument and with return value
//without argument and with return value

//without argument & return value
function type1()
{
    console.log("/without argument & return value");
}
type1();

console.log('==========');

//with argument and no return value
function type2(name)
{
  console.log('with argument and no return value' ,name);
}
type2('Raghav');
console.log("========")

//with argument and with return value

function type3(name)
{
    return "Hi " + name;
}

let greet=type3('Raghav');

console.log(greet);

//without argument and with return value
function type4()
{
    return 'Hello';
}
console.log(type4());