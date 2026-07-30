// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// let i=1;
// while(i<=15){
//     console.log(i);
//     i++;
// }
// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=15);
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(i);
//     }
// }
arr=[1,6,8,3];
// n=arr.length;
// console.log(n);
// for(let i=0;i<n;i++){
//     console.log(arr[i]);
// }
// console.log(arr);
// arr.push(9);
// console.log(arr);
// arr.push(0);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(2);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr=[4,"raghav",7.9,true];
// console.log(arr);
// console.log(typeof(arr));
// brr=[[1,2,2],[5,8,9,4,1]];
// console.log(brr);
// // ForOf loop
// crr=[3,7,3,8,0,2];
// for(const ele of crr){
//     console.log(ele);
// }
// for(const ele of crr){
//     console.log(2*ele);
// }
brr=[3,7,3,8,0,2];
brr.forEach((ele,i,brr)=>{
    //console.log(ele,i,brr);
    //console.log(2*ele);
    ele*=2;
});
console.log(brr);