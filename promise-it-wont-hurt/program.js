// setTimeout(() => {
//   console.log('TIMED OUT!');
// }, 300);

// var promise = new Promise((resolve, reject) =>
// setTimeout(() => resolve('FULFILLED!'), 300)
// setTimeout(() => reject(new Error('REJECTED!')), 300)
// resolve('I FIRED');
// reject(new Error('I DID NOT FIRE'));
//   resolve('PROMISE VALUE')
// );

function onReject(error) {
  console.log(error.message);
}

const promiseFulfilled = Promise.resolve(true);
const promiseRejected = Promise.reject(new Error(false));

// promise.then(null, onReject);
// promise.then(console.log, onReject);
// promiseFulfilled.then(console.log);
// promiseRejected.catch(onReject);
// console.log('MAIN PROGRAM');

// first()
//   .then(secret => second(secret))
//   .then(console.log);

// const attachTitle = name => 'DR. ' + name;

// Promise.resolve('MANHATTAN')
//   .then(attachTitle)
//   .then(console.log);

// function parsePromised(json) {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// parsePromised(process.argv[2]).then(null, onReject);

// function alwaysThrows() {
//   return Promise.reject(new Error('OH NOES'));
// }

// function iterate(n) {
//   console.log(n);
//   return n + 1;
// }

// Promise.resolve(1)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(() => alwaysThrows())
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(onReject);

// function all(...promises) {
//   const res = [];
//   return new Promise(resolve => {
//     for (let p of promises)
//       p.then(e => {
//         res.push(e);
//         if (res.length === promises.length) return resolve(res);
//       });
//   });
// }

// all(getPromise1(), getPromise2()).then(console.log);

var qhttp = require('q-io/http');

// qhttp
//   .read('http://localhost:1337')
//   .then(json => console.log(JSON.parse(json)))
//   .then(null, console.error)
//   .done();

qhttp
  .read('http://localhost:7000/')
  .then(id => qhttp.read('http://localhost:7001/' + id))
  .then(json => console.log(JSON.parse(json)))
  .then(null, console.error)
  .done();
