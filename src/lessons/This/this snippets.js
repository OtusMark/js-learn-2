// This определяется в момент когда до него доходит код.
// В режиме useStrict, this всегда undefined.
// В create react app всегда используеться строгий режим!!!
// This не передаеться через замыкания!!! Кроме стрелочной функции.
// У стрелочных функций нет своего this. Стрелочные функции берут this с контекста в котором они определены.

// console.log(this) // Здесь будет undefined.
// console.log(this) // в snippets будет window.

function f() {
    console.log('function f', this)
}

f() // Тоже самое что вызов window.f() this укажет на глобальный объект.

let obj = {name: 'Mark'}
obj.f = f
obj.f() // Функция вызываеться от имени obj. Результатом будет: function func {name: "Mark", f: ƒ}
obj.k = function () {
    console.log('obj.k', this) // Function declaration всегода привязываеться (bind) к родителю. this будет obj.
    f() // Функция будет вызвона от имени глобального объекта. 'this' не передаеться через замыкания. window.f()
    this.f() // равнозначено obj.f()
    setTimeout(function() {
        console.log('function setTimeout', this)
    }, 0) // setTimeout находиться в window!!! Всегда будет window.setTimeout().
}

obj.k() // Все что выдаст результат вызова описанно выше.

let arrow = () =>  console.log('arrow function', this);
function FF() {
    console.log('function f', this);
    return () =>  console.log('arrow function', this);
}
arrow(); // window
FF()(); // Обе window. Arrow function определена внутри вызова функции FF у которой при вызове конеткст window.

obj.ff = FF;
obj.ff()(); // Обе obj. Arrow function определена внутри вызова функции FF у которой при вызове конеткст obj.

obj.ff = FF();
obj.ff(); // Обе window. В строчке выше мы вызвали FF() в кнтексте window.

obj.ff = FF;
let someFunc = obj.ff(); // Сохраняет результат вызова функции.
someFunc(); // Обе obj. Arrow function определена внутри вызова функции FF у которой при вызове конеткст obj.


arrow = () => {
    console.log('arrow function', this);
    setTimeout(function() {console.log('function setTimeout', this)}, 0);
    setTimeout(() => console.log('arrow setTimeout', this), 0);
}

arrow(); // 3 window

obj = {
    name: 'Eugene',
    arrow: () => {
        console.log('arrow function', this);
        setTimeout(function() {console.log('function setTimeout', this)}, 0);
        setTimeout(() => console.log('arrow setTimeout', this), 0);
    },
    dec() {
        console.log('arrow function', this); // obj
        setTimeout(function() {console.log('function setTimeout', this)}, 0); // window. Функция вызываеться в контексте setTimeout - window.
        setTimeout(() => console.log('arrow setTimeout', this), 0); // obj. Функция создалась в конетексте obj.
    }
};

obj.arrow(); // Объект не сооздает область видимости... 3 раза window. Стрелочная функция берет this из глобального объекта так как у нее не своего this.

obj.dec(); // Написано выше.

obj = {
    name: 'Eugene',
    arrow: () => {
        return () => console.log(this);
    },
    arrow2: () => {
        return function () {console.log(this)};
    },
    dec() {
        return function () {console.log(this)};
    },
    dec2() {
        return () => console.log(this);
    },
};

let obj2 = {name: 'Vlad'};

obj2.arrow = obj.arrow;
obj2.arrow()(); // Window

obj2.arrow = obj.arrow();
obj2.arrow(); // Window

obj2.arrow2 = obj.arrow2;
obj2.arrow2()(); // Window

obj2.arrow2 = obj.arrow2();
obj2.arrow2(); // obj2

obj2.dec = obj.dec;
obj2.dec()(); // Window - Второй вызов происходить в контексте window.

obj2.dec = obj.dec();
obj2.dec(); // obj2

obj2.dec2 = obj.dec2;
obj2.dec2()(); // obj2

obj2.dec2 = obj.dec2();
obj2.dec2(); // obj