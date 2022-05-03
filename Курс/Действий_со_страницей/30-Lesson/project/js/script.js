/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const film_genre = document.getElementsByClassName('promo__genre');

const promo = document.querySelectorAll('.promo__adv');

const promo_img = promo[0].getElementsByTagName('img');

const background = document.getElementsByClassName('promo__bg');

const list = document.getElementsByClassName("promo__interactive-item");

// 1 task

//promo_img[0].remove(); // remove block

for (let i = 0; i < promo_img.length; i++) {
    promo_img[i].remove();
    i--;
}

// 2 task

film_genre[0].textContent = 'ДРАМА';

// 3 task 

background[0].style.backgroundImage = 'url(./img/bg.jpg)';

// 4 and 5 task

movieDB.movies.sort();

for (let i = 0; i < list.length; i++) {
    list[i].textContent = `${i + 1} : ${movieDB.movies[i]}`;
}