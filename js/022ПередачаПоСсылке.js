"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10; // aynı değişken

console.log(obj);
console.log(copy);


function copyObj(obj){
    let newObj = {};
    for (let key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}

const numbers = {
    a: 5,
    b: 2,
    c: {
        x:11,
        y:22
    }
};

const nerNumb = copyObj(numbers);
nerNumb.a = 33;
nerNumb.c.x = 0;
console.log(nerNumb);
console.log(numbers);

const add = {
    d: 7,
    e: 8
};

console.log(Object.assign(numbers,add)); // birleştirme işlemi
const ramdeYerAyirarakCopy = Object.assign({}, add);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asdasad";
console.log(oldArray);
console.log(newArray)

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "ig"];

console.log(internet);
// ayrı eleman gibi ele alır
// spread operator 

function logg(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const forlog = [2,40,45];
logg(...forlog);

const arrayy = ["a", "b"],
    newArr = [...arrayy];
console.log(newArr);

const ob = {
    q: "a",
    w: "e"
};
const newOb = {...ob};

// ...tekEleman yazdırmada tek satır
// ...tekElemani, ...İkinci yazdırmada alt alta geliyor?? 
