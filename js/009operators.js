"use strict";

console.log("txt" + " - obj");

console.log(+"txt" + "5"); // -> NaN not a number hatası
console.log(4 + +"5");
// Unary plus 

// pstfix prefix notation
let incr = 10,
    decr = 10;

// incr++;
// --decr;

console.log(incr++); // önce ööperatör çağırılır sonra incr işlemleri yapılır
console.log(--decr); // decr işlemleri yapılıp operatör çağrılır

console.log(5%2); // -> 1

console.log(2*4 == 8); // true
console.log(2*4 == "8"); // true -> typeof bakılmaksızın karşılaştırıyor
console.log(2*4 === "8"); // false


const isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed);
console.log(!isChecked || !isClosed);
