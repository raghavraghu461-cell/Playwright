let arr= [1,2,3,4,5,6];
 //add element at end
 arr.push(7,8,9);
 console.log(arr);


 //remove element at end
 arr.pop(9);
console.log(arr);

//add elemenet at start

arr.unshift(-1,-2);
console.log(arr);

//remove element at start
arr.shift(-1);
console.log(arr);

//remove element at middile and add an element

arr.splice(0,2,0);
console.log(arr);

//find the index of the element
console.log(arr.findIndex(n =>n>7));

//find element is included in arry

console.log(arr.includes(9));


//map transform arry and return new array which satisify the condition
let m =arr.map(x=> x>4? "Presnent":"Not Presenet");
console.log(m);

//filet: transform an array and retun new array which satisfy the condition

let zn=arr.filter(s=>s>7);
console.log(zn);

//reduce provide the sum of an array

let total=arr.reduce((a,b) =>a+b,0);
console.log(total);


