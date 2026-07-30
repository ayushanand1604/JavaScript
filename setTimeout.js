//print 1 to 10 but with delay of 1 sec after each number gets printed
for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

// function h(){
//     console.log("hello");
// }
// function m(){
//     console.log("mello");
// }
// // setTimeout(h,4*1000);
// setTimeout(m,1*1000);
// setTimeout(function(){
//     console.log("hello");
// },4*1000);

// setTimeout(function(){
//     console.log("aur bhai");
// },5*1000);