// Callback function ek aisa function hota hain jo ek function ke andar pass hota hain
function product(a,b,c){
    return a*b*c;
}
// function fun(x,y){
//     console.log(x-y);
// }
// fun(product(3,8,9),7)
function fun(x,y){
    let a=x(2,5,4);
    console.log(a-y);
}
fun(product,7);