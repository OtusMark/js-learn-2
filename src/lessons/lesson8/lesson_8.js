//A где вернется NaN
// console.log(10 / 0);
// console.log(10 / 'five');
// console.log(10 / Number('5'));
// console.log(10 / parseInt('two'));

//B где указан правильный вариант
// setTimeout(formatName(), 5000, 'John', 'Doe');
// setTimeout('formatName', 5000, 'John', 'Doe');
// setTimeout(formatName('John', 'Doe'), 5000);
// setTimeout(() => {formatName('John', 'Doe')});

//C дан код const copy = JSON.stringify([new String('false'), new Boolean(false), undefined]);
// чему будет равно значение copy

// "[false,{}]";
// "['false', {}]";
// "["false", false, undefined]";
// "["false", false, null]";

//D let arr = [ [1,2], [3,4,5] ]
// какие выражения выведут следующий результат [1, 2, 3, 4, 5]
//
// [].concat(...arr); // [].concat([1,2], [3,4,5])
// [].concat.apply(arr, []);
// [].concat([...arr]);
// [].concat.apply([], arr); // =>[].concat([1,2], [3,4,5])

//E  дан следующий код
// const exec = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));
//
// async function runParallel() {
// 	const [result1, result2, result3] = await Promise.all(
// 		[exec('x', 100), exec('y', 500), exec('z', 100)]
// 	);
// 	return `parallel is done: ${result1}${result2}${result3}`
// }
//
// // какие из ниже приведенных выражений корректно вызовут  runParallel()
//
// async runParallel().then(data);
// runParallel().then(data);
// runParallel().done(function (data) {
// 	return data;
// })
// runParallel().then(function (data) {
// 	return data;
// })

//F дан код, какой будет результат после исполнения Promise.race

// let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'));
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'));
//
// Promise.race([car1, car2, car3])
// 	.then(value => {
// 		let result = `${value} the race.`;
// 	})
// 	.catch(err => console.log('Race is cancelled.', err));


//G что произойдет в результате исполнения ниже предложенного кода
// function Monster() {this.name = 'hello'};
// const s = Monster();


//H что будет в результате вызова нижеприведенного кода
//
// setCurrentURL();
// console.log('The current URL is: ' + url);
//
// function setCurrentURL() {
// 	url = window.location.href;
// }

//I дан код

// function Animal(size, type) {
// 	this.type = type || 'Animal';
// 	this.canTalk = false;
// }
// Animal.prototype.speak = function() {
// 	if (this.canTalk) {
// 		console.log('It spoke!');
// 	}
// }
//
// let Pet = function(size, type, name, owner) {
// 	Animal.call(this, size, type);
// 	this.size = size;
// 	this.name = name;
// 	this.owner = owner;
// }
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet();
//
// // какие 3 свойства будут заполнены в результате выполнения кода
//
// 'owner';
// 'name';
// 'type';
// 'canTalk';
// 'speak';

//J дана следующая разметка
// <div id="main">
//   <div id="card-00">This card is smaller.</div>
//   <div id="card-01">This card is bigger.</div>
// </div>
// // какой код вернет значение ширины блока с id="card-01"
// document.getElementById('card-01').style.width;
// document.getElementById('card-01').innerHTML.length;
// document.getElementById('card-01').width;
// document.getElementById('card-01').getBoundingClientRect().width;

//K дан код
// let array = [1,2,3,4,4,5,4,4];
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 4){
// 		array.splice(i,1);
// 	}
// }
// // какой будет результат в результате выполнения кода
// [1,2,3,5];
// [1,2,3,4,5,4];
// [1,2,3,4,5,4,4];
// [1,2,3,4,4,5,4];

//L дан код, что выведет консоль в результате исполнения?
// let first = 'Who';
// let second = 'What';
// try {
// 	try {
// 		throw new Error('Sad trombone');
// 	} catch (err) {
// 		first = 'Why';
// 		throw err;
// 	} finally {
// 		second = 'When';
// 	}
// } catch (err) {
// 	second = 'Where';
// }

// console.log(first);
// console.log(second);
//
// 'Who', 'When';
// 'Why', 'Where';
// 'Why', 'When';
// 'Who', 'Where';
//
//M Дан ниже код, чему будет равен result в результате его исполнения
// function changeValue(param) {
// 	param = 5;
// }
// let a = 10;
// let b = a;
// changeValue(b);
// const result = a + ' - ' + b;


// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
// Number.prototype.plus = function (v) { return this + v};
// Number.prototype.minus = function(v) { return this - v};
//
// console.log((2).plus(3).minus(1))

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
//
// function  getStr() {
// 	return [].slice.call(arguments, 1).join(arguments[0]);
// }


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
		{
			valueNode: 3,
			next: null
		},
		{
			valueNode: 2,
			next: null
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null
				},
				{
					valueNode: 5,
					next: null
				}
			]
		}]
};

function getSum(obj) {
	let arr = [obj];
	let sum = 0;
	let current;

	while(arr.length > 0) {
		current = arr.shift();
		sum += current.valueNode;

		if(current.next != null) {
			for(let i = 0; i < current.next.length; i++) {
				arr.push(current.next[i]);
			}
		}
	}

	return sum;
}

// Task 5
// исправить код, что бы работал правильно

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

// function Foo(fn, name, author) {
// 	return fn.call({}, name, author)
// }

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function f(a ,b) {
	if (b !== undefined) {
		return a + b;
	} else {
		return function(b) {
			return a + b;
		}
	}
}

// Task 8
// Реализовать функцию fo: fo(1)(2)(3)() -> 6, fo(0)(3)(1)(5)() -> 9

function fo(arg) {
	let v = arg;

	return  function (a) {
		if(a !== undefined) {
			return fo(v + a);
		} else {
			return v;
		}
	}
}


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

function one(arg) {
	if(typeof arg === 'function') {
		return arg(1);
	} else {
		return 1;
	}
}
function two(arg) {
	if(typeof arg === 'function') {
		return arg(2);
	} else {
		return 2;
	}
}

function five(arg) {
	if(typeof arg === 'function') {
		return arg(5);
	} else {
		return 5;
	}
}

function seven(arg) {
	if(typeof arg === 'function') {
		return arg(7);
	} else {
		return 7;
	}
}

function plus(arg) {
	return function(a) {
		return a + arg;
	}
}

function minus(arg) {
	return function(a) {
		return a - arg;
	}
}

// Task 10
// Реализовать функцию сортировки массива пузырьком

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

function check(str) {
	const config = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	const helper = str => {
		if(str.length === 0) return true;
		if( (str.length + 1) % 2 === 0) return false;

		const isOpenBrackets = char => Object.keys(config).includes(char);
		const getClosingBracket = char => config[char];

		for(let i = 0; i < str.length; i++) {
			if (isOpenBrackets(str[i]) && getClosingBracket(str[i]) === str[i + 1]) {
				let newString = `${str.slice(0, i)}${str.slice(i + 2)}`;
				return helper(newString);
			}
		}
		return false;
	}

	return helper(str);
}


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из
// уникальных значений первого массива.

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]




// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function Bomb(message, delay) {
	this.message = message;
	setTimeout(this.blowUp.bind(this), delay * 1000);
}

Bomb.prototype.blowUp = function (){
	console.log(this.message);
}

new Bomb('Explosion!', 5);

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));