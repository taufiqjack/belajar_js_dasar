let x;
console.log(typeof(x));

/* output: undefined */

/* ----------------------------- */

let x = 10;
console.log(typeof(x))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question)

/* output: "What do you think of JavaScript?" he asked */

const answer = '"I think it`s awesome!" he answered confidently';

console.log(answer);

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */   


let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))


const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

let someLaterData = null;
console.log(someLaterData);

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/


const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);