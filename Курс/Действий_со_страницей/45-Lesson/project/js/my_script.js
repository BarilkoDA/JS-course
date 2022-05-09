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

const filmGenre = document.querySelector('.promo__genre');

const promo = document.querySelectorAll('.promo__adv img');

//const promo_img = promo[0].getElementsByTagName('img');

const background = document.querySelector('.promo__bg');

const list = document.querySelector(".promo__interactive-list");

// 1 task

//promo_img[0].remove(); // remove block

/* for (let i = 0; i < promo_img.length; i++) {
    promo_img[i].remove();
    i--;
} */

promo.forEach(item => {
    item.remove();
}); 

// 2 task

filmGenre.textContent = 'драма';

// 3 task 

background.style.backgroundImage = 'url("img/bg.jpg")';

// 4 and 5 task

movieDB.movies.sort();

/* for (let i = 0; i < list.length; i++) {
    list[i].textContent = `${i + 1} : ${movieDB.movies[i]}`;
} */



/* list.forEach((qwe, i) => {
    qwe.textContent = `${i + 1} : ${movieDB.movies[i]}`;
}); */

function showTheMoveDB(data) {
    list.innerHTML = "";
    data.forEach((film, i) => {
        list.innerHTML += `<li class="promo__interactive-item">${i + 1} : ${film} 
            <div class="delete"></div>
            </li>`; // += - дополнительное присваивание
        });
};

showTheMoveDB(movieDB.movies);

const NewFilm = document.querySelector('.adding__input'),
      btn = document.querySelector('.add button'),
      checkbox = document.querySelector('.yes');

let checkboxStats = false,
    trash = null;
EventForTrash ();

btn.addEventListener('click', (event) => { 
    event.preventDefault();
    if (NewFilm.value){
        if (NewFilm.value.length > 21) {
            movieDB.movies[movieDB.movies.length] = `${NewFilm.value.slice(0, 22)}...`;
        } else {
            movieDB.movies[movieDB.movies.length] = NewFilm.value;
            
        }
        if (checkboxStats) {
            console.log('"Добавляем любимый фильм"');
        }
    }
    movieDB.movies.sort();
    showTheMoveDB(movieDB.movies);
    EventForTrash ();
});

checkbox.previousElementSibling.addEventListener('click', function() { 
    if(!checkboxStats) {
        checkboxStats = true;
    } else {
        checkboxStats = false;
    }
});

function EventForTrash () {
    trash = document.querySelectorAll('.delete');
    for(let item of trash)
    {
        item.addEventListener('click', (event) => {
            let text = event.target.previousSibling.data.slice(4, -14),
                arr = [],
                i = 0;
            for (let value of movieDB.movies) {
                if (value != text) {
                    arr[i] = value;
                    i++;
                }
            }
            movieDB.movies = arr;
            event.target.previousSibling.remove();
            showTheMoveDB(arr);
            EventForTrash ();
        });
    }
}