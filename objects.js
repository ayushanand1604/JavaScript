// Object is kind of like map/dictionary where we have key value pairs
var details=["raghav","garg","coder"];
let x={
    name:"Ayush",
    age:24,
    percentage:90,
    branch:"cse"
};
console.log(x);
console.log(x.age);
for(let i in x){
    console.log(i,x[i]);
}