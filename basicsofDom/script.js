// let x=document.querySelector("h2");
// x.style.color="red";
// // x.style.backgroundColor="yellow";
// // x.style.fontFamily="sans-serif";
// setTimeout(function(){
//     x.style.backgroundColor="yellow";
//     x.style.fontFamily="sans-serif";
// },4000)
// let y=document.querySelector("h1");
// // y.style.backgroundColor="green";
// setTimeout(function(){
//     y.innerHTML="Hello Ayush";
// },2000)
let x=document.getElementById("ele1");
// x.style.color="red";
// x.style.backgroundColor="yellow";
x.addEventListener("click",function(){
    x.style.color="red";
    x.style.backgroundColor="yellow";
})
let y=document.getElementById("ele2");
y.addEventListener("mousemove",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
})
y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
})
let z=document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
})
z.addEventListener("click",function(){
    x.style.color="white";
    x.style.backgroundColor="green";
    x.innerHTML="Balbasur"
})