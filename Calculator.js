"use strict"

const ps=require("prompt-sync");

const prompt=ps();

var a=parseInt(prompt("Enter first number:"));
var b=parseInt(prompt("Enter first number:"));
var result;

let str="Choose Operation:\n"+
"1.Add\n"+
"2.Subtract\n"+
"3.Multiply\n"+
"4.Divide\n";

console.log(str);
let opt=parseInt(prompt());

switch(opt){

    case 1:
        result=a+b;
        break;
    case 2:
        result=a-b;
        break;
    case 3:
        result=a*b;
        break;
    case 4:
        result=a/b;
        break;
}

console.log(result);