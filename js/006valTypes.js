// "use strict";

let num = 4;

num = num + 0.1;
console.log(num); // 4.1

console.log(-4/0); // -Infinity
console.log("str" * 9); // NaN not a nummber

const progLang = "js";

console.log(javascript); // undefined

let jsjs;
console.log(jsjs); // null


const obj = {
    name: "JavaScript", // свойство
    age: 1,
    isComplicated: false,
};
console.log(obj.age);
console.log(obj["age"]); // . ile erişim daha doğru

let arr = ["p.jpg", "a.png", 6, {a:"dsad"}, []]
console.log(arr[3].a);
