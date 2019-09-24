// setTimeout(() => {
//     console.log('5 seconds passed')
// }, 5000);

// var time = 0;
// var timer = setInterval(() => {
//     time +=2;
//     console.log(`${time} seconds gone`)
//     if (time >=10) {
//         clearInterval(timer)
//     }
// }, 2000);

//Normal Function statement
// function sayHI() {
//     console.log('Hi')
// }
// sayHI();

//Function Expression
//Example 01
// var myName = 'Rony';
// var name = function () {
//     console.log(`My name is ${myName}`)
// }

// name()

//Example 02
// var nickName = 'Rony'
// function callFuntion(name) {
//     name();
// }

// var myName = function () {
//     console.log(`My name is ${nickName}`)
// }

// callFuntion(myName)

var stuff = require('./stuff')

console.log(stuff.adder(5,6))
console.log(stuff.names(['Shubhan', 'Christan', 'Khalid']))
console.log(stuff.adder(stuff.pi,6))















