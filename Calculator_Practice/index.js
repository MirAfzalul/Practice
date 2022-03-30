//setting spans(html) field to 10 and 5
let num1=10;
let num2=5;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
let sumId=document.getElementById("sum-el");

//function for adding two number
function addNum(){
    let sum=0;
    sumId.textContent="Sum: ";
    sum= num1 + num2;
    sumId.innerText+=sum;
}
//function for subtracting two number
function subNum(){
    let sum=0;
    sumId.textContent="Sum: ";
    sum= num1 - num2;
    sumId.textContent+=sum;
}
//function for divideing two number
function divNum(){
    let sum=0;
    sumId.textContent="Sum: ";
    sum= num1 / num2;
    sumId.textContent+=sum;
}
//function for multipyling two number
function mulNum(){
    let sum=0;
    sumId.textContent="Sum: ";
    sum= num1 * num2;
    sumId.textContent+=sum;
}
