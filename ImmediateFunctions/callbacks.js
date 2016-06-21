function addNumbers(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b)
}

function myLoop(count, math, add) {
    for (var i = 0; i < count; i++) {
        setTimeout(function () {
            math(100, 20);
            add(200, 300);
        }, 3000)

    }
}
myLoop(3, subtract, addNumbers);
