function OnetoN(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
    console.log("Done");
}
OnetoN(5);
OnetoN(10);
let a=-2;
let b=3;
function eqn(a,b){
    return (Math.abs(a*a*a)+Math.abs(b*b*b));
}
console.log(eqn(2,4));
console.log(Math.abs(-7));
console.log(Math.max(5,1));
console.log(Math.min(-5,1));
console.log(Math.max(4,8,90,399,23));
console.log(Math.pow(2,7));
console.log(Math.sqrt(10));
console.log(Math.cbrt(27));
console.log(Math.log(2.81));
console.log(Math.log10(100));
console.log(Math.log2(64));
console.log(Math.floor(8.9));
console.log(Math.floor(-8.9));
console.log(Math.ceil(8.9));
console.log(Math.round(8.9));
console.log(Math.random());
let num=Math.floor(Math.random()*10);
console.log(num);