console.log("Test Promises");

// Promise Constructor
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
// Syntax: new Promise(executor)
// executor: A function to be executed by the constructor, during the process of constructing the new 
// Promise object. The executor is custom code that ties an outcome to a promise. 
// You, the programmer, write the executor. Its signature is expected to be: 
//function(resolutionFunc, rejectionFunc){
  // typically, some asynchronous operation.
//}
// About the executor, it’s important to understand the following:
//     1. The executor return value is ignored.
//     2. If an error is thrown in the executor, the promise is rejected.

const promiseA = Promise.resolve(100);
//const promiseA = Promise.reject("no hair");
//const promiseA = new Promise((resolveKA, rejectKA) => rejectKA("I have my reasons."))

const promiseB = Promise.resolve(200);
//const promiseB = Promise.reject("no money");

const promiseList = [promiseA, promiseB];

const result = Promise.all(promiseList);

// Format: .then(onFulfilled[, onRejected]);
// Format:
// .then(value => {
//   // fulfillment
// }, reason => {
//   // rejection
// });
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
result.then(
    (value) => { console.log("Success: " + value); console.log(result); },
    (value) => { console.log("Fail: " + value); console.log(result); }
  );

console.log("Result: ");
console.log(result);

console.log("End Test Promises")
