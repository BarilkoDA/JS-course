let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
    personalMovieDB = {
        count: "", // - сюда передается ответ на первый вопрос
        movies:{}, // - в это свойство поместить пустой объект
        actors:{}, // - тоже поместить пустой объект
        genres:[], // - сюда поместить пустой массив
        privat:false // - в это свойство поместить boolean(логическое) значение false
    };

personalMovieDB["count"] = numberOfFilms;

let answer1 = prompt("Один из последних просмотренных фильмов?", ""), 
    answer2 = prompt("На сколько оцените его?", ""),
    answer3 = prompt("Один из последних просмотренных фильмов?", ""), 
    answer4 = prompt("На сколько оцените его?", "");

    personalMovieDB["movies"] = `${answer1}: ${answer2}, ${answer3}: ${answer4}`;
    



