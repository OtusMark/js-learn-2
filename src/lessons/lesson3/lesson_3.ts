// import { log } from 'util';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//
// let p = new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 15;
//     console.log(a + b);
//     // setTimeout(()=> {
//     //     resolve();
//     // },1000);
//     // ajax(fetch, axios) ....
//     resolve(10) // 1 arg - positive case
//     reject() // 1 arg - negative case
// }); // res, rej
// // Promise methods: then(); catch(); finally()
// p.then(res => {
//     // ajax (5)
//     return // ajax result
// }, err => {}).then(res2 => {})

// Positive case
// let testPromise = new Promise((res, rej) => {
//     // some ajax request => return positive
//     res(10);
// })
//
// testPromise
//     .then(res => {
//         console.log(res);
//         // one more ajax request => return positive
//         return 25 // result second ajax request
//     })
//     .then(res2 => {
//         console.log(res2)
//     })

// Negative case
// let testPromise = new Promise((res, rej) => {
//     // {
//     //     status: 200 || 300 // positive
//     //     status: 400 || 500 // negative
//     // }
//     // some ajax request => return negative
//     rej(0)
// })
//
// testPromise
//     .then(res=>{}, err => {
//         let a = 100500;
//         console.log(err)
//         throw { a, err }
//         //return 30;
//     })
//     .then(res2 => {
//         console.log(res2)
//     }, err2 => {
//         console.log(err2)
//     })


// let p: Promise<number> = new Promise((res, rej) => {
//     rej(10);
// })
//
// p
//     .then(res => res + 25)
//     .catch(err => {
//         console.log('err', err)
//     })
//     .then(res => res + 25)
//     .catch(err => {
//         console.log('err', err)
//     })
//     .then(res => res + 25)
//     .catch(err => {
//         console.log('err', err)
//     })
//     .then(res => res + 25)
//     .catch(err => {
//         console.log('err', err)
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('err', err)
//     })


// new Promise((res,rej) => {
//     let a = 10;
//     let b = 15;
//     res(console.log(a + b)); // a + b = 25
// }).then((r) => console.log(r));

// let c = 10;
//
// async function f() {
//     try {
//         let a = 10;
//         let b = await Promise.reject(5);
//         console.log('in function',b);
//         return b;
//     } catch (e) {
//         console.log('err',e);
//     }
// }
//
// console.log('function result',f());
//
// let d = c + c;

// just a plug
export default ()=>{};