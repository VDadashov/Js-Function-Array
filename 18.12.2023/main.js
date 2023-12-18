// "use strict";


// let sum = 10;

// if(sum == 10){
//     sum++;
// }

// console.log(a);



// function sum1(){
//     console.log(4+4);
// }

// test();



// let test = function(){
//     console.log("hello world");
// }



// let test = ()=>{
//     console.log("hello");
// }


// console.log(this);


// let name1 = "Vusal";
// let name2 = "Fatime";
// let name3 = "Nicat";


// let marka = "BMW";
// let brand = "m4"
// let cost = "30000";
// let isauto = "true";


// let car = {
//     marka : "BMW",
//     brand : "m4",
//     color : "black",
//     cost : 30000,
//     isauto : true
// }



// console.log(f1[f1.length - 1]);

// f1[10] = "Nermin";
// f1[99] = "Sevinc";

// console.log(f1[0]);

// for(let i=0;i<=f1.length - 1;i++){
//     console.log(f1[i]);
// }


// for(let item in f1){
//     console.log(f1[item]);
// }

// for(let item of f1){
//     console.log(item);
// }


// f1.forEach(element => {
//     console.log(element);
// });


let f1 = ["Vusal","Fatime","Nicat"];
let f2 = ["Nermin", "Emin"];
let total = [];

// f1.push("Nermin");
// total.push(...f1,"Eli");

// let name = f1.pop();


// console.log(f1);

// lifo last insert first out
// fifo first insert first out


// crud create read update delete


f1.shift();
f1.unshift("Salam");



// console.log(total.concat(f1,f2));


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);


// let cars = ["bmw","mercedes", "lada", "porsche"];

// console.log(cars);


// cars.splice(1,2,"ferrari");
// cars.splice(2, 1,"ferrari")

// console.log(cars);


const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
let todo = [];

function add(){
    todo.push(inp.value);
    inp.value = "";
    let list = "";

    for(let item of todo){
        list += `<li class="list-group-item">${item}</li>`
    }

    ul.innerHTML = list;
}


btn.addEventListener("click",add)






