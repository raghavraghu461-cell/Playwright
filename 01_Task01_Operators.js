function Twomax()
{
   let x=10;
   let y=12;

   let max_number = x>y? x +"is greater than"+y : y+" is greater than"+x;

   console.log(max_number);
}
Twomax();

//max of three numbers

function Threemax()
{
    let x=12;
    let y=11;
    let z=91;
    
    let result=x>y?(x>z?x+"is greater":z+"is greater"):(y>z?y+"i larger":z+"is larger");
    console.log(result)
}
Threemax();
