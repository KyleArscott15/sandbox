const promise1 = new Promise((resolveKA, rejectKA) => {
  setTimeout(() => {
    rejectKA('foo');
  }, 1000);
});

promise1.then(
  (value) => { console.log("Success: " + value); }, // expected output: "foo"
  (value) => { console.log("Fail: " + value); }
);

console.log(promise1);
// expected output: [object Promise]

