"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }

};

const john = Object.create(soldier);
// bu şekil kullan 

// const john = {
//     health: 100
// };

// john.__proto__ == soldier; // esli kullanım
// Object.setPrototypeOf(john, soldier); // oluşturup unuttuğunda

// console.log(john.armor);
john.sayHello();
