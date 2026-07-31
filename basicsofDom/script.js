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
// let x=document.getElementById("ele1");
// // x.style.color="red";
// // x.style.backgroundColor="yellow";
// x.addEventListener("click",function(){
//     x.style.color="red";
//     x.style.backgroundColor="yellow";
// })
// let y=document.getElementById("ele2");
// y.addEventListener("mousemove",function(){
//     y.style.color="white";
//     y.style.backgroundColor="orange";
// })
// y.addEventListener("mouseleave",function(){
//     y.style.color="black";
//     y.style.backgroundColor="white";
// })
// let z=document.getElementById("ele3");
// y.addEventListener("click",function(){
//     z.style.color="white";
//     z.style.backgroundColor="purple";
// })
// z.addEventListener("click",function(){
//     x.style.color="white";
//     x.style.backgroundColor="green";
//     x.innerHTML="Balbasur"
// })
async function ayush(){
    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    })
    let bangloreWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },5000)
    })
    // delhiWeather.then(alert);
    // bangloreWeather.then(alert);
    console.log("Fetching Delhi weather pls wait....");
    let delhiW= await delhiWeather;
    console.log("Fetched Delhi weather :"+delhiW);
    console.log("Fetching Banglore weather pls wait....");
    let bangloreW= await bangloreWeather;
    console.log("Fetched Banglore weather :"+bangloreW);
    return [delhiW,bangloreW];
}
const cherry=()=>{
    console.log("Hey I am cherry and i am not waiting for ayush");
}
console.log("Welcome to weather control room");
// let a=ayush();
// console.log(a);
let a=ayush();
let b=cherry();
a.then((data)=>{
    console.log(data);
})
// let promise = new Promise(function(resolve,reject){
//     alert("Hello");
//     resolve(56);
// })

// console.log("Hello");
// setTimeout(function(){
//     console.log("Hello Ayush");
// },2000);
// console.log("My name is " + "Ayush");
// console.log(promise);