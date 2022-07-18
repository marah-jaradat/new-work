const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

const adder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = adder(10);
console.log(add10(-2));
console.log(add10(20));

// challenge
const createTipper = (tipPersent) => {
  return (billAmount) => {
    return tipPersent * billAmount;
  };
};

const tipper20 = createTipper(0.2);
console.log(tipper20(100));
