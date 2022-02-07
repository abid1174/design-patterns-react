/*
    A singleton should only be able to get instantiated once.
*/

let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can create only one instance.");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }

  getCount() {
    return counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
