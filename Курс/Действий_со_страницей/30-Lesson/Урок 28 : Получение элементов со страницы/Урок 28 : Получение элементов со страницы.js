/*
DOM - document object modul (объектная модель документа)

Методы для получения элемента со страницы можно разделить на 2 типа

--- Те которые устоялись и которыми пользуются давно

1) по id : Get element by id
id может быть только один на странице

const box = document.getElementById('box');

При запуске кода внутри консоли он работать не будет так как у него отсутствует объект document

2) по тегу : Get element by Tag Name

const btns = document.getElementsByTagName('button'); // получаем все элементы button в виде псевдо массива

// Для получения конкретного элемента  требуется указать индекс элемента
const btns = document.getElementsByTagName('button')[1]; // получаем второй элемент button

console.log(btns); // выводим псевдо массив

Даже если на странице присутствует только один элемент к примеру button при запросе button по тегу мы получим псевдомассив

3) по классу : Get element By Class Name

const circles = document.getElementsByClassName('circle'); // пишем только название класса без .
// При использовании getElementsByClassName мы также получаем псевдомассив

--- Те которые появились недавно

1) По css селектору

-- Все элементы по селектору
const hearts = document.querySelectorAll('.heart'); // можно использовать любые css селекторы
// При использовании querySelectorAll мы также получаем псевдомассив
так как в querySelectorAll пережается селектор указывается: 
класс - .
id - # 
и т.д.

Все данные по css селекторам https://learn.javascript.ru/css-selectors

у .querySelectorAll() есть метод forEach

hearts.forEach(item => {
    console.log(item);
});

-- Первый элемент по селектору
const oneHeart = document.querySelector(".heart"); // возвращает первый элемент по селектору на странице

Итоги

У нас есть методы которые работают на объектной модели документа. На доме.

    document. 

работает только в браузере.

У нас есть только два метода для получения получения элемента 
.getElementById('') по id
.querySelector('') первый по селектору

Для работы с элементом из псевдомассива используются индексы
document.getElementsByTagName('button')[1]

*/