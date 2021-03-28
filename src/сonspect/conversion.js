// null, undefined, boolean, number, string, object, NaN, symbol - Primitive data type

console.log(typeof {}) // object
console.log(typeof []) // object

// There is no type like function... function is object. The console writes function for our convenience.
console.log(typeof (() => {})) // function
console.log(typeof (function f() {})) // function

// The unusual
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof NaN) // Number

// To number conversion
// NaN -------------
// undefined => NaN
console.log(+undefined)
// 'abc' => NaN
console.log(+'abc') // NaN
// {} => NaN
console.log(+{})
// () => NaN
console.log(+(() => {}))
// [2, 2] => NaN
console.log(+[2, 2])
// ['2px'] => NaN
console.log(+['2px'])
// ------------------
// [] => 0
console.log(+[])
// [2] => 2
console.log(+[])
// ['2'] => 2
console.log(+[])
// null => 0
console.log(+null)
// true => 1
// false => 0
console.log(true + false) // 1
// '', ' ' => 0
console.log(+'')
console.log(+' ')
// '123' => 123
console.log(+'123') // 123

// Logical conversion
// false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
// basically everything except the above is true ;)
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(function(){})) // true
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean(5)) // true
console.log(Boolean([0])) // true
console.log(Boolean([''])) // true
console.log(Boolean([' '])) // true

// To string conversion
// Just converts everything to string
console.log(NaN + 'str') // NaNstr
console.log(null + 'str') // nullstr
console.log(undefined + 'str') // undefinedstr
console.log([] + 'str') // str
console.log({} + 'str') // [object Object]str
console.log((() => {}) + 'str') // () => {}str

// Comparison
// == vs ===
// === No conversion
// == Converts
console.log ([] == 0) // true
console.log ([] === 0) // false

// Strange behavior
console.log (null == 0) // false. Maybe because null is object. But Boolean(null) is false
console.log ({} == 0) //  false. Boolean({}) is true... Here is no problem.
console.log ([] == 0) // true. ????