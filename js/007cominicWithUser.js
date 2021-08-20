"use strict";

alert("Hello World");

const result = confirm("Are you here?"); 
console.log(result); // true / false

const answer = prompt("Вам есть 18?", "defAnswer");
console.log(typeof(answer), answer);
//kullanıcıdan her zaman str gelir
// +prompt(); -> return int

// alert confirm prompt gibi komutlar html yüklenmeden çağırıldaklarından
// html'in construct olmasını engellerler

const answers = []
console.log(typeof(answers)); // -> object

answers[0] = prompt("Language:", "");
answers[1] = prompt("User:", "");
answers[2] = prompt("any num:", "");

document.write(answers);
