let count = 0;

const Counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  },
};

Object.freeze(Counter);
export { Counter };
