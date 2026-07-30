// filter out even elements
function fun(ele){
    if(ele%2!=0) return true;
    else return false;
}
let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);
arr=arr.filter(fun);
console.log(arr);
arr=arr.filter(ele=>(ele<7));
console.log(arr);
