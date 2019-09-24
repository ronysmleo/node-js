var adder = function (a,b) {
    return `The totol is ${a+b}`
};

var names =function (arr) {
    return `there are ${arr.length} names available here`
}
var pi =3.142;

module.exports={
    adder : adder,
    names : names,
    pi : pi
}