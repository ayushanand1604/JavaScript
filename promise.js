// let promise = new Promise(function(resolve,reject){
//     //alert("Hello");
//     resolve(56);
// })

// console.log("Hello");
// setTimeout(function(){
//     console.log("Hello Ayush");
// },2000);
// console.log("My name is " + "Ayush");
// console.log(promise);
// // Why we use promise?
// // for parallel execution
// // fetch google.com homepage
// // fetch data from the data api
// // fetch pictures from the server
// // print downloading
// //Rest of the Script
let p1= new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and I am fullfilled")
        resolve(true)
    },5000)
})
let p2= new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and I am fullfilled")
        reject(new Error("I am an error"));
    },5000)
})
p1.then((data)=>{
    console.log(data);
})
p2.catch((error)=>{
    console.log("some error occured in p2");
})