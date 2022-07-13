// const add = function (){
//     return arguments[0] + arguments[1]
// }

// () => {} don't bind arguments 
const add = () => {
    return arguments[0] + arguments[1]
}


console.log(add(11,22,33,44));

// () => {} don't bind this keyword
const car = {
    color: 'red',
    getSummary: () => {
        return `My car is ${this.color}`
    }
}

console.log(car.getSummary());