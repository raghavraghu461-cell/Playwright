// function ifstamt()
// {
//     let n=7;
//     if(n%2===0)
//     {
//         console.log("n is not prime");
//     }
//     else(n%2!==0)
//     {
//         console.log("n is  prime");
//     }
    
// }
// ifstamt();

//if marks > 90 = grade A
//marks between 81 to 89 grade B
// marks between 71 ro 80 grade c
function marksprogram()
{
    let marks = 60;
    if (marks>90)
    {
        console.log("Grade A");

    }
        else if (marks>=81 && marks<90)
        {
            console.log("Grade B");
        }
        else if (marks<=79 && marks>70)
        {
            console.log("Grade C");
        }
        else 
        {
            console.log("Re-Do the exam");
        }
        
    }

marksprogram();