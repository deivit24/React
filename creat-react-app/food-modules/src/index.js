import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go : ${fruit}`);

// remove end of fruit

let remaining = remove(foods, fruit);

console.log(
  `I am sorry but we are all out of. We have ${
    remaining.length
  } other foods left`
);
