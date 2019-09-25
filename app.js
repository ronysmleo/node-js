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
var util = require('util')
 
var Person =function (name) {
    this.name =name;
};


util.inherits(Person, events.EventEmitter)


var James = new Person('James')
var Mary = new Person('Mary')
var Ryu = new Person('Ryu')

var people= [James, Mary, Ryu]

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said ' + mssg)

    })
})

James.emit('speak', 'hey dudes')

















































