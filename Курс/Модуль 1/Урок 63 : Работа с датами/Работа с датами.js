/*
Через работу с датами можно как получить текущую дату так и произвести замер длительности работы функции.
Показать таймер, часы и т.д.
Хранение времени изменения и создания файла - больше для node js (BE части - сервера)
*/
"use strict";
/* 
const now = new Date();

console.log(now);

const nowArg = new Date('2022-05-15');

console.log(nowArg);

const nowArg2 = new Date(2022, 5, 15, 20);

console.log(nowArg2);

const milSec = new Date(0); // Timestamp передача миллисекунд с даты 1970-01-01

console.log(milSec);

// Любую дату можно трансформировать в миллисекунды и одратно.

// Для получения даты до 1970-01-01 мы можем использовать отрицательные данные в миллисекунды

const milSec2 = new Date(-100); 

console.log(milSec2); // 1969-12-31T23:59:59.900Z */

const now = new Date();

console.log(now.getDate());
console.log(now.getDay());

//Получение компонентов даты - методы геттеры
/*
.getFullYear() - получение года (YYYY)
.getMonth() - получение месяца (0 - 11)
.getDate() - получение дня (1 - 31)
.getHours() - получение часов
.getMinutes() - получение минут
.getSeconds() - получение секунд
.getMilliseconds() - получение миллисекунд

.getDay() - получить положения дня в месяце недели. Начинается с ВС - это 0, ПН - 1 и т.д.

Если требуется получить дату в UTC мы должны получить данные в 0-ом часовом поясе
*/
console.log(now.getHours()); // 15 так как мы находимся в +3 часовом поясе
console.log(now.getUTCHours()); // 12

/*
.getTime() - возвращает timestamp
.getTimezoneOffset() - разница в минутах между текущим и нулевым часовым поясом
*/
console.log(now.getTime()); // 1652617141605
console.log(now.getTimezoneOffset()); // -180

// Можно преобразовать timestamp обратно в дату если передать timestamp как аргумент

const now2 = new Date(1652617141605);
console.log(now2); // 2022-05-15T12:19:01.605Z

/*
Методы сеттеры - передача/установки даты

.setFullYear() - установка года (YYYY)
.setMonth() - установка месяца (0 - 11)
.setDate() - установка дня (1 - 31)
.setHours() - установка часов
.setMinutes() - установка минут
.setSeconds() - установка секунд
.setMilliseconds() - установка миллисекунд

.setDay() - получить положения дня в месяце недели. Начинается с ВС - это 0, ПН - 1 и т.д.
*/

const now3 = new Date();

console.log(now3); // 2022-05-15T12:42:20.194Z
console.log(now3.setHours(18)); // 1652629340194
console.log(now3); // 2022-05-15T15:42:20.194Z

//Когда мы используем объект date в браузере он будет ориентироваться на локальную дату которая стоит на компьютере.

//Так же Можно передавать 2 аргумента, к примеру 2 аргумент в setHours() будет передавать минуты

console.log(now3.setHours(18, 40));

// объект new Date() поддерживает самоисправление.
// Если в часы передать к примеру 40 часов то JS исправит данные и мы получим корректное значение.

// метод parse

const now4 = new Date('2022-05-15');
      Date.parse('2022-05-15');

      //Значение будет идентичным

const date = new Date();
const date2 = Date.parse('2022-05-15');

console.log(date);
console.log(date2);

// Засечь время работы скрипта

let start = new Date(); // Дата начала работы скрипта

for(let i = 0; i < 100000; i++) {
    let some = i ** 3; // i возводится в степень 3 каждый раз
}

let end = new Date(); // Дата завершения работы скрипта

console.log(end - start);