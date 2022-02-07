import singletonCounter from "./SingletonCounter.js";
import { Counter } from "./SingletonCounterObj.js";

const counter = new Counter();

counter.increment();
counter.increment();

console.log(singletonCounter.getCount());
