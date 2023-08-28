//import {sum as mySum} from './mymodule.js'; //as를 통해 다른 이름으로 변경가능
import {sum as makeTable } from './mymodule.js'

console.log(sum(10,20));
//console.log(mySum(10,20)); -> defalt 제외,단일 export시 문제

window.onload=function(){
    makeTable("box");
    makeTable("box2");
}