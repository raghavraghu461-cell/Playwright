//sorting strings
let fruits =['banana','Watermelon','litvhi'];
console.log(fruits.sort());

//sort numbers

let n = [1,3,2,5,4,7,8,9,6];
console.log(n.sort((a,b)=>a-b))//ascending order
console.log(n.sort((a,b)=>b-a));//decending order

//splice - modify the existing array
//slice return new array

let q=n.slice(2,5);//return array with number at index 2 to index 5-1 i., 4
console.log(q);

//every & some
console.log(n.every(a=>a>8));
console.log(n.some(a=>a>8));

let m=[10,11];
let o=[...n,...m];
console.log(o);

console.log(fruits.join(''));//remove spaces and join all the elements in array

