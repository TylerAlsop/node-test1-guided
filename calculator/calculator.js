// function add(a = 0, b = 0) {
//     var s = 0;
//     for (var i=0; i < arguments.length; i++) {
//         s += arguments[i];
//     }
//     return s;
// }

function add(...values) {
    return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function subtract(a = 0, b = 0) {
    return a - b
}

function multiply(a = 1, b = 1) {
    return a * b
}

function divide(a = 1, b = 1) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Function requires numbers as arguments but recieved something else.")
    }

    if (b === 0) {
        throw new Error("Cannot divide by zero.")
    }

    return a / b
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}

