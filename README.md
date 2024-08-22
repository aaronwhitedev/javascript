# Intro to JavaScript

Many engineers work 'around' JavaScript and really don't understand how the language functions and end up wasting extensive time debugging. In this article I review some of the fundamentals which are often overlooked.

Starting from the beginning, JavaScript is a dynamically typed language which implements blocks (curly braces `{}`). Code is evaluated and executed in sequential order, with some important caveats.

## Variables

JavaScript defines variables using the keywords `var`, `let`, and `const` and assigns variable values using the equals (`=`) operator. A variable declared with a primitive value using `const` cannot be reassigned. The second line is invalid.

```
const name = 'Bill';
name = 'Joe';
```

The values for `var` and `let` may be reassigned. The main difference between `var` and `let` is scoping. `var` is not block scoped (scoped between curly braces `{}`) the way `let` is. In almost every case it’s best to use the `let` keyword as it has essentially replaced the `var` keyword in modern JavaScript.

Comments are indicated using two front slashes.

```
// Number
const age = 10;
or
const age = 10; // Number
```

In JavaScript you may assign a value of one type to a variable and then change the type of the value in the future:

```
// This is legal in JavaScript
let age = 10; // Number
age = '10'; // String
```

A developer may view the value of a variable by using the `console.log()` syntax:

```
// Number
const age = 10;
console.log(age);
10

// String
const firstName = 'Joe';
console.log(firstName);
Joe
```

A string may use a single quotation mark (`‘`) or a double quotation mark (`“`). A developer’s use sometimes depends on what is being passed into a function (`console.log` is a function). By convention, variables and functions are typically written using the camelcase naming convention where the first letter of a word, after the first word, is capitalized. Variables must start with an underscore, an alphabetical character, or a `$`.

Examples:  
`firstName`, `age`, `streetAddress`, `email`, `phoneNumber`, `fourtyNine`, `_xyz`, `$x`

Referencing an unknown variable results in an `Uncaught ReferenceError of not defined` typical of a misspelled variable.

```
const nme = 'Bill'; // Notice the variable is missing the 'a'
console.log(name); // Variable spelled 'name', not 'nme'
```

You can store more than primitives (`string`, `number`, `boolean`, `undefined`, `null`) in variables.

```
// Object literal
const person = { firstName: 'Joe', lastName: 'Smith' };
console.log(person);
{firstName: 'Joe', lastName: 'Smith' }
```

A JavaScript program may reference the property of an object:

```
console.log(person.firstName);
Joe
```

The variable `person` (stored on the stack) points to the object reference (on the heap). You may update properties of an object instantiated with `const` since `person` is not a primitive:

```
const person = { firstName: 'Joe', lastName: 'Smith' };
person.age = 30;
console.log(person.age);
30
```

You may also nest objects:

```
const person = {
	firstName: 'Joe',
	address: {
		street: '123 Main'
	}
};
console.log(person.address.street)
123 Main
```

Referencing an unknown property on an object results in a value of `undefined`.

## Quirkiness

There's no way around it - JavaScript is quirky. Below are a few brief examples:

```
false == 0
true

null == 0
false

null < 1
true
```

View more JavaScript quirkiness with explanations at
https://github.com/denysdovhan/wtfjs

## Dates

Dates can be confusing in JavaScript - know that the `Month` property for a `Date` in JavaScript is 0-based.

```
// Using the month of June as an example
const today = new Date();
console.log(today.getMonth());
5

// Date(year, month, day)
const month = new Date(2024, 5, 1);
console.log(month)
Sat Jun 01 2024 00:00:00 GMT-0400 (Eastern Daylight Time)
```

A developer may use arrays to store collections of data. Arrays are 0-based indexes, meaning the first element of an array (known also as the index) is `0`.

```
// Arrays
const people = ['Joe','Sally','Bob'];
console.log(people)
(3) ['Joe', 'Sally', 'Bob']

console.log(people[0])
Joe

console.log(people[2])
Bob

const people = [
	{ firstName: 'Cosmo', lastName: 'Kramer' },
	{ firstName: 'Ruthie', lastName: 'Cohen'}
];

console.log(people[0].firstName);
Cosmo

console.log(people[1].lastName);
Cohen
```

A developer may push new values to the last element of an array using the `push` function.

```
const people = [{ firstName: 'Art', lastName: 'Vandelay' }];
people.push({ firstName: 'Tim', lastName: 'Whatley' });
console.log(people);
[
	{ firstName: 'Art', lastName: 'Vandelay' },
	{ firstName: 'Tim', lastName: 'Whatley' }
]
```

A developer may insert new values to the first element of an array using the `unshift` function.

```
const people = [{ firstName: 'Mickey', lastName: 'Abbott' }];
people.unshift({ firstName: 'David', lastName: 'Putty' });
console.log(people);
[
	{ firstName: 'David', lastName: 'Putty' },
	{ firstName: 'Mickey', lastName: 'Abbott' }
]
```

A developer may get the `length` of any array by using the `.length` property on the array variable.

```
console.log(people.length);
2
```

Iterate over arrays using a for `loop`.

```
for (let i = 0; i < people.length; i++) {
	console.log(people[i].firstName);
}
```

Iterate over arrays using the `forEach` method:

```
// What is this black magic!?!
people.forEach(function(person) {
	console.log(person.firstName);
});
```

`.forEach` is a `method` on an array which iterates over the array. Without getting too deep into terminology, the difference between a `function` and a `method` is simply that a `method` is attached to an `object` whereas a `function` is not attached to an `object`. The `function` being called by the `.forEach` method is run on every iteration, this is called a
`callback` as the `function` is ‘called back’ after every iteration of the `.forEach` method execution. More on this later.

## Functions

A function statement is put into memory initially and runs when invoked.

```
function xyz() {
	console.log('XYZ');
}
xyz()
XYZ
```

Hoisting in JavaScript enables a program to call a function before it has been declared.

```
xyz() // This is legal JavaScript syntax and works!
function xyz() {
	console.log('XYZ');
}
XYZ
```

An anonymous function is a fancy way of saying that a function doesn’t have a name.

```
function() {
	console.log('xyz'):
}
```

The problem with the above code is that you can’t call it. If you want a function to execute immediately after declaring it you can wrap it in parentheses and immediately invoke it. This is called an Immediately Invoked Function Expression also referred to as an IIFE (pronounced iffy).

```
(function() {
	console.log('xyz');
})();
```

A function expression has memory allocated to it, but it’s not put into memory until the code is executed - therefore it’s not hoisted. A function expression may not be called until after the function expression is declared:

```
const xyz = function() {
	console.log('xyz');
}
xyz();
```

## Fat Arrow Functions

The use of fat arrow functions (`=>`) enables you to shorten your code and causes some different behaviors with the keyword `this` (which I haven’t addressed yet). Fat arrow functions change how functions are scoped. In a previous example we had:

```
people.forEach(function(person) {
	console.log(person.firstName);
});
```

This can be written in a single line, without curly bracets, using the fat arrow function syntax as below:

`people.forEach((person) => console.log(person.firstName));`

You can do all sorts of useful things with anonymous fat arrow functions. The previously mentioned IIFE can be written using a fat arrow function as below:

```
(() => {
	console.log('xyz');
})();
```

This can be further shorted to a single line:

`(() => console.log('xyz'))();`

## Conditional Expressions

You’ll find yourself frequently writing conditional statements in JavaScript.

```
const age = 20;
const myAge = 20;
if (age == myAge) {
	console.log('Ages match!');
}
```

Another example with multiple conditions is below:

```
if (age == myAge && age > 15) {
	console.log('Ages match and are greater than 15!');
} else {
	// Due to the apostrophes I use double quotes
	console.log("Ages don't match or aren't greater than 15");
}
```

Conditions are evaluated from left to right. As soon as any condition is not satisfied, JavaScript continues to the next block when using double ampersands `&&` or the double pipes `||`.

Here is an example of a conditional statement using the OR (double pipes `||`) syntax:

```
if (age == myAge || age > 15) {
	console.log('Ages match or one is greater than 15!');
} else {
	console.log("Ages don't match or are greater than 15");
}
```

A single ampersand or single pipe are bitwise operators (compares binary values) and are not widely used in JavaScript.

Sometimes programs compare variables of different types. Depending on the situation, this may or may not be desirable. I represent this situation in the block below where `myAge` is a `Number` and `theirAge` is a `String`. Using two equal signs signifies loose equality.

```
const myAge = 20;
const theirAge = '20';
if (myAge == theirAge) {
	console.log('Ages match');
} else {
	console.log('Ages do not match');
}
```

The result of the above condition will result in `Ages match` because JavaScript coerces the type of `String` for `theirAge` to a `Number`, which equates with `myAge`.

You'll almost always want types `AND` values to match. To force both types and values (strict equality) to match, use the triple equal signs syntax (`===`) as below.

```
const myAge = 20;
const theirAge = '20';
if (myAge === theirAge) {
	console.log('Ages match');
} else {
	console.log('Ages do not match');
}
```

The result of the above condition will result in `Ages do not match` because JavaScript is forcing both types `AND` values to match. This may seem peculiar and there are opinions on whether or not to explicitly evaluate types using double or triple equal signs. The official documentation states `Strict equality is almost always the correct comparison operation to use` and I’ve only ever heard one person arguing against
this. For more on type coercion visit the official docs at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness.

## Callbacks & Asynchronous JavaScript

Now we’ll get into some of the challenges developers run into with JavaScript’s asynchronous nature. JavaScript evaluates and executes code sequentially, meaning line 1 is executed first, then line 2 is executed followed by line 3, so on and so forth until the process has run to completion. You will hear that JavaScript is a single threaded, non-blocking I/O (Input/Output) and implements an event loop. Let me clarify all this mumbo-jumbo with the below code.

```
console.log('1');
setTimeout(function() {
	console.log('2');
}, 2000);
console.log('3');
1
3
2
```

If you run the above code you’ll notice the output is `1`, `3`, `2` even though I just explained that JavaScript executes code sequentially. That’s not what we have here! So what’s going on?

The JavaScript engine executes the first line and logs `1`. Line 2 has a `function declaration` called `setTimeout` which takes two arguments (two parameters), a `function` and a `timeout` value. In the above case the value of timeout is set to `2000` representing `AT LEAST 2000` milliseconds (or two seconds) before it may be executed.

This is the super-confusing part. `setTimeout` is an asynchronous function which accepts a `function` as an argument (the first parameter). The `setTimeout` function will then execute the `function` passed into it at some point in the `future`, it will ‘call back’ that `function`. I want to highlight the fact that `setTimeout` is an `asynchronous` function.

From the official docs:

`setTimeout()` is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use `setTimeout()` to create a "pause" before the next function in the function stack fires.
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

Isolating the code below - I’m instructing the JavaScript engine to execute the code at some point, at least 2000 milliseconds, into the future:

```
function() {
	console.log('2');
}
```

The JavaScript engine has everything it needs to execute that code since it’s a self-contained function in memory. You’ll notice that the output of running that code was `1`, `3`, `2`. So somehow the “single threaded” JavaScript engine processes `console.log(‘3’)` without having to wait, without blocking the execution of `console.log(‘2’)`. This is often incorrectly referred to as the Event Loop. To be more accurate, there’s a
queue which the `function` with `console.log(‘2’)` is placed in, which the Event Loop runs `AFTER` processing the current work until completion (including, in this case, the remainder of the file). The Event Loop will then pop the code out of the queue and the JavaScript engine will execute the code in that execution context until completion before picking up the next item in the queue. In our case, the
`console.log(‘3’)` was able to be run because `console.log(‘2’)` was placed in the queue and could not be run until the remainder of the current work ran until completion. The Event Loop checks the queue for anything available to run, it could be more than 2000 milliseconds, but, again it has to be at least 2000 milliseconds. To provide a bit more evidence of this, let’s use similar code to see what happens. In this code we’ll set the timeout parameter to
`0` meaning if the function inside `setTimeout` isn’t placed in the queue it would run immediately.

```
console.log('1');
setTimeout(function() {
	console.log('2');
}, 0);
console.log('3');
1
3
2
```

Again, we get the same result because JavaScript places the code inside of `setTimeout` into the queue (that’s what we instructed it to do) and continues processing until completion, then revisits the queue to check for additional code to run - which includes the code inside `setTimeout`.

## Promise

A Promise in JavaScript is also an asynchronous call which eventually returns ‘something’. To test this out you’ll need to install NPM (Node Package Manager) which is a package manager for JavaScript used by most JavaScript developers. (
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

There are very few scenarios where a developer wouldn’t elect to use a widely-used library to make the request. The only reasons that come to mind would be to reduce application size (which really shouldn't be the case), the inability to use 3rd party libraries, or a lack of knowledge and/or ability to use 3rd party packages in a dev, stage, or prod environment. Outside of some sort of organizational limitations, I would categorize those arguments as ones which suggest JavaScript
is not the correct tool for your job.

The below code includes the module `https` which calls the `request` function which calls a URI (Universal Resource Identifier). The `request` function is an asynchronous function which takes a parameter for a URI and a function (callback). To be explicit, I’m using traditional `functions` in the below code. After NPM is installed (along with Node.js) you may run `node test.js` in your working directory. We call
`console.log()` some text to see the order of events.

```
// test.js
const https = require('https');
const uri = 'https://jsonplaceholder.typicode.com/todos';
(function() {
	console.log('1');
	https.request(uri, function(resp) {
		let data = '';
		resp.on('data', (chunk) => {
			data += chunk.toString()
		});
		resp.on('end', function () {
			const body = JSON.parse(data);
			console.log('2');
		});
	}).on('error', (error) => {
	console.log('Error', error);
})
.end();
console.log('3');
})();
```

Provided there isn’t an error (which we aren’t checking for), data is returned from the API (Application Programming Interface). Once again, the output of our `console.log()` statements is `1`, `3`, `2` illustrating that the `request` method is being run after the completion of the execution of the file, meaning it’s being placed in the queue to be called by the Event Loop and then run. This is obviously not desired if you want
to use the contents of the API without nesting code inside the `request`. So how does one programmatically `FORCE` the program to wait on the API before continuing? In the old days, we used a `Promise`. Once again I’m using traditional functions to be explicit in the code below.

```
// test.js
const https = require('https');
const uri = 'https://jsonplaceholder.typicode.com/todos';
(function () {
	console.log('1');
	new Promise(function (resolve, reject) {
		https.request(uri, function (resp) {
			let data = '';
			resp.on('data', function (chunk) {
				data += chunk.toString()
			});
			resp.on('end', function () {
				resolve(JSON.parse(data));
				console.log('2');
			});
		})
		.on('error', function (error) {
			reject(error);
		})
		.end();
	}).then(function (data) {
		console.log('3');
	});
})();
```

This is pretty ugly code, again, without error handling - but it does guarantee a response before continuing, which was the objective. The problem is the code isn’t extendable as you have to nest the response inside a `.then()` block. A `Promise` is required to be called using the `new` keyword, which is outside of the scope of this document (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

I’ve worked on code bases where this code was abstracted into its own function, but that didn’t mitigate the fact that almost no one understood what was going on.

## Async/Await

Instead of writing code that’s not very understandable, you may litter your code with the `async` and `await` keywords, transforming an asynchronous process into an artificially synchronous process as demonstrated in the code below.

```
// test.js
const https = require(‘https’);
const uri = 'https://jsonplaceholder.typicode.com/todos';
(async function () {
	console.log('1');
	const data = await new Promise(function (resolve, reject) {
		https.request(uri, function (resp) {
			let data = '';
			resp.on('data', function (chunk) {
				data += chunk.toString();
			});
			resp.on('end', function () {
				resolve(JSON.parse(data));
			});
		})
		.on('error', function (error) {
			reject(error);
		})
		.end();
	});
	console.log('2');
	console.log(data);
	console.log('3');
})();
```

Again, this is ugly code that doesn’t have good error handling and is still chunking through data, without retries, etcetera, etcetera.

Most modern JavaScript apps would use a library like `node-fetch` (
<a href="https://www.npmjs.com/package/node-fetch" target="_blank" className="text-blue-900 underline hover:text-red-600">
https://www.npmjs.com/package/node-fetch
</a>
) to handle the request and underlying error handling. You then simply sprinkle your code with `async/await` statements and everything becomes much easier to digest.

Install `node-fetch` using the below command:

`npm install node-fetch`

```
// test.js
const uri = 'https://jsonplaceholder.typicode.com/todos';
// The above line must have a semi-colon for the beginning of the async syntax
(async function () {
	const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
	try {
		const resp = await fetch(uri);
		const data = await resp.json();
		console.log(data);
	} catch (err) {
		console.error(err);
	}
})();
```

This code is much cleaner and we’re leveraging a wildly popular and battle tested library (`node-fetch`) which provides error handling that achieves our objectives. You’re able to easily add `try/catch` blocks to handle exceptions and the code is very legible and maintainable.

As a side note, the fetch import statement is written to support various environments so this works `EVERYWHERE`.

## Closures

Closures hide variables from the global scope (`counter` in below example) in the Closed Over Variable Environment (COVE) or Persistent Lexical Scope Referenced Data (PLSRD). Closures give our code persistent memory:

```
function increment() {
	let counter = 0;
	function incrementCounter() {
		return counter++;
	}
	return incrementCounter;
}

const myCounter = increment();
myCounter();
myCounter();
0
1
```
