"use stirct";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("inner method from accessor");
    }
    
};



// // console.log(options.name);
// // delete options.name; // komple özelliği siler const olarak tanımlasak ta içi değişir
// // console.log(options);

// for(let key in options){
//     if(typeof(options[key]) === "object"){
//         for(let subKey in options[key]){
//             console.log(`key: ${key} : subKey: ${subKey} -> ${options[key][subKey]}`);
//         }
//     }
//     else{
//         console.log(`key: ${key} -> ${options[key]}`);
//     }
// }

// objelerin lenght özellilği yok 
// Object.keys(options) vasıtasıyla dizi oluşturduktan sonra 
// dizinin lenght ini alabilirsin

let arr = Object.keys(options);
console.log(arr, arr.length);
options.makeTest();


// options[key][subKey]
// [] [] gibi yapıların kullanmaması için deStructurisaation kullan
const {border, bg} = options.colors;
console.log(border);

// property leri dışa aktardığından artık bir değişken gibi işlem göre bilirler 
// yapıyı de strukturize etmiş olduk 

