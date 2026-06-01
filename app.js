import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let who = ['The dog', 'My mom', 'My dad', 'My boyfriend'];
let action = ['ate', 'vomit', 'lost', 'broke'];
let what = ['my homework', 'my phone', 'the computer'];
let when = ['before the gym', 'when I was eating', 'while I was working', 'during my breakfast', 'while I was crying'];

let whoIndex = Math.floor(Math.random() * who.length);
let actionIndex = Math.floor(Math.random() * action.length);
let whatIndex = Math.floor(Math.random() * what.length);
let whenIndex = Math.floor(Math.random() * when.length);

let randomExcuse = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];

document.getElementById("excuse").innerHTML = randomExcuse;

console.log("Excusa generada exitosamente: " + randomExcuse);
};