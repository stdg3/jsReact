/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените его?', "");
        
        if (a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB[a] = b;
            console.log("done");
        }
        else{
            console.log("err");
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel(){

    if (personalMovieDB.count < 10){
        console.log("less");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("done");
    }
    else if (personalMovieDB.count >= 30){
        console.log("more");
    }
    else{
        console.log("error");
    }

}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();
