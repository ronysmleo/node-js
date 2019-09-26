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
// var nickName = 'Rony'
// function callFuntion(name) {
//     name();
// }

// var myName = function () {
//     console.log(`My name is ${nickName}`)
// }

// callFuntion(myName)

// var stuff = require('./stuff')

// console.log(stuff.adder(5,6))
// console.log(stuff.names(['Shubhan', 'Christan', 'Khalid']))
// console.log(stuff.adder(stuff.pi,6))

//***********EVENTS Formula */
// var events = require('events');
// var myEmmitter01 = new events.EventEmitter(); //created custom events

// myEmmitter01.on('someEvent', function (mssg) {
//     console.log(mssg)
// })

// myEmmitter01.emit('someEvent', `The event was emmitted`)
// *******************************************************************************************************
//Example of Events

var events = require('events');
var util = require('util');


var Person =function (name) {
    this.name=name
}

util.inherits(Person, events.EventEmitter)

var Gopal = new Person('Gopal')
var Dipali = new Person('Diplai')
var Jony = new Person('Jony')
var Rony = new Person('Rony')
var Jeni = new Person('Jeni')

var family =[Gopal, Dipali, Jony, Rony, Jeni]

family.forEach(function (person) {
    person.on('look', function (text) {
        console.log(person.name+ ' call ' + text)
    })
})

Gopal.emit('look', 'please come here')
































