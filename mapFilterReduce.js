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