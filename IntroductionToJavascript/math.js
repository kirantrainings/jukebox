function add(a, b) {
    var result = a + b;
    return result;
}

function division(a, b) {
    var result = a / b;
    return result;
}

function modulus(x, y) {
    var result = x % y;
    return result;
}

var data = add(10, 20);
var name = add("Kiran", "PVS");
var divideResult = division(100, 10);
var modResult = modulus(404, 8);
console.log(data);
console.log(name);
console.log(divideResult);
console.log(modResult)
