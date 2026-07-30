// let arr=[1,9,2,7];
// console.log(arr);
// arr=arr.sort();
// console.log(arr);
// arr=arr.sort((a,b)=>b-a);
// console.log(arr);
let arr=[1,-9,-2,7];
console.log(arr);
arr=arr.sort((a,b)=>a-b);// actual sorting
console.log(arr);
arr=arr.sort((a,b)=>b-a);// reverse sorting
console.log(arr);