//Working with Objects in javascript

function Calculuator() {

    //creating object by using object literals.
    var math = {};
    math.addition = function (first, second) {
        return first + second;
    };
    math.subtract = function (first, second) {
        return first - second;
    };

    math.divide = function (first, second) {
        return first / second;
    }

}
