"use strict";

//Типы данных

// Примитивы
    /* 
    Числа, 
    Строки, 
    Логические типы, 
    null, 
    undefinded, 
    Symbol, 
    picking */

// Объекты
    // Обычные объекты

    // Специальные объекты
    /* 
        Массивы - [], 
        Функции - function, 
        Объекты Даты, 
        Регулярные выражения, 
        Ошибки */

// Динамическая типизация - преобразование одного типа данных в другой

// To String

// 1) Через ключевое слово String

console.log(typeof(String(null))); // string
console.log(String(null)); // null

// 2) Конкатинация (что то складываем со строкой) При сложении со строкой получаем строку

console.log(typeof(5 + '')); // string 

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number

// 1) Через ключевое слово Number

console.log(typeof(Number(null))); // number

// 2) Через унарный плюс

console.log(typeof(+"5")); // number

// 3) Через метод parseInt

console.log(typeof(parseInt("15px", 10))); 

// To boolean

// 0, '', null, undefined, NaN - всегда false
// Пустой массив, пустой объект - true

// 1) Нативный способ

let switcher = null;

if (switcher) {
    console.log('Working');
}

switcher = 1;


if (switcher) {
    console.log('Working');
}

// 2) Через ключевое слово Boolean (Практически не используется)

console.log(typeof(Boolean(null))); // boolean

// 3) Преобразование через два знака отрицания

console.log(typeof(!!"44444")); // boolean