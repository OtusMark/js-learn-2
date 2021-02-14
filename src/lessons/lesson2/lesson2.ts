console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// let a = 10;
// let b = 15;
//
// // globalScope
// let globalScope = {
//     a: 10,
//     b: 15
// }
//
// function testFunc() {
//     //let a = 100;
//     console.log(a); // testFuncScope.a == undefined // outerScope.a => globalScope.a == 10
//     function innerFunc() {
//         let a = 5;
//         console.log(a); // innerFuncScope.a == undefined // outerScope.a => testFuncScope.a == undefined // outerScope.a => globalScope.a == 10
//     }
// }
//
// // testFuncScope
// let testFuncScope = {
//     outerScope: globalScope,
//     //a: 100,
// }
//
// // innerFuncScope
// let innerFuncScope = {
//     outerScope: testFuncScope,
//     a: 5,
// }


// function f() {
//     let a = 10;
//     return function(b:number) {
//         return a + b;
//     }
// }
//
// let parm = f();
//
// console.log(parm(45))//55

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(n:number) {
//     return function (n2: number) {
//         return n + n2;
//     }
// }
//
// console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     }
// }

// function makeCounter() {
//     let count = 1;
//     return function () {
//         return count++;
//     }
// }

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         return count;
//     }
// }
//
// let makeCounterScope = {
//     outerScope: window,
//     count: 0, // 1 // 2
// }
//
// let innerFunctionScope = {
//     outerScope: makeCounterScope
// }
//
// const counter = makeCounter();
// console.log(counter()); // 1 // innerFunctionScope.count == undefined / innerFunctionScope.outerScope.count => 0 / innerFunctionScope.outerScope.count = 1
// console.log(counter()); // 2 // innerFunctionScope.count == undefined / innerFunctionScope.outerScope.count => 1 / innerFunctionScope.outerScope.count = 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(startCount: number) {
//     return {
//         increase: () => ++startCount,
//         decrease() {
//             return --startCount;
//         },
//         decrease: function() {
 //                   some code///
//         },
//         reset: () => {
//             startCount = 0;
//             return startCount;
//         },
//         set: (newCount: number) => {
//             startCount = newCount;
//             return startCount;
//         },
//         getCount: () => startCount,
//     };
// }
//
// let counter = makeCounter(10);
// counter.increase();
// counter.increase();
// counter.increase();
// console.log(counter.getCount());
// let counter2 = makeCounter(0);
// counter2.set(100);
// counter2.decrease();
// console.log(counter2.getCount());
// counter.increase();
// console.log(counter.getCount());


//  Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumToByLoop(n:number) {
//     let result = 0;
//     for (let i = n; i >= 0 ; i--) {
//         result += i;
//     }
//     return result;
// }
//
// console.log(sumToByLoop(100));

// function sumTo(n:number): number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(3));

// function sumTo(n:number, acc: number): number {
//     if (n === 1) return acc + n;
//     return sumTo(n - 1, acc + n);
// }
//
// console.log(sumTo(3, 0));

//
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n:number): number {
//     if(n === 1) return n;
//     return n * factorial(n - 1 );
// }
//
// console.log(factorial(5))


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number): any {
    if(n === 0) return 0;
    if(n === 1) return (num: number) => num;

    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if(_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number);
        } else {
            return helper;
        }
    }
    return helper;
}

console.log(superSum(0))
console.log(superSum(3)(2)(5)(3))
console.log(superSum(3)(2,5,3))
console.log(superSum(3)(2,5)(3,9))



// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};