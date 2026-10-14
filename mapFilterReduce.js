// function twice(ele){
//     return 2*ele;
// }
// function square(ele){
//     return ele*ele;
// }
// function add10(ele){
//     return ele+10
// ;}
let arr=[1,-6,-3,8];
console.log(arr);
// let brr=[];
// for(const ele of arr){
//     brr.push(Math.abs(ele));
// }
// let brr=arr.map(function(ele){
//     return ele*ele*ele;
// });
// let brr=arr.map((ele)=>{
//     return ele*ele*ele;
// });
arr=arr.map(ele =>ele*2);
console.log(arr);

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// 1. Convert the second array into a Set for fast lookup
const set2 = new Set(array2);

// 2. Filter elements from array1 that exist in the Set
const commonElements = array1.filter(item => set2.has(item));

console.log(commonElements); // Output: [3, 4, 5]