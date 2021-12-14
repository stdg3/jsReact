"use strict";

const arr = [1,1,2,4,5,7];

// arr.pop(); // soon elemanı siler
// arr.push(10);
// arr.push("a"); // eleman ekler
console.log(arr);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("in case");
for (let ind in arr){
    console.log(arr[ind]);
}

console.log("of case");
for(let val of arr){
    console.log(val);
}

const arr2 = [0,2,5,4,3,9];

// arr2[99] = 1;
console.log(arr2.length); // 100 -> son index +1 mantığı ile çalıştığından
console.log(arr2); //[ 0, 2, 5, 4, 3, 9, <93 empty items>, 1 ]

arr2.forEach(function(val, indx, myArr){
    console.log(`${indx} -> ${val} from array: ${myArr}`)
});

const str = prompt("mes", "txt");
const product = str.split(", ");
console.log(product);
console.log(product.join(" | "));
product.sort(); // alfabetik sıralama yapar
// int bir dizide str miş gibi sıralar!!


arr = [5,2,14,28,11];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}
// в сорт исп алгоритм быстрой отсортировки...
