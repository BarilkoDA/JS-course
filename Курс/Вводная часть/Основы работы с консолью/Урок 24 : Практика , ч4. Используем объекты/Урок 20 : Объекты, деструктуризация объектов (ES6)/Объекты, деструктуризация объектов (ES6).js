"use strict";

/* Объекты в JS - это ассоциативные массивы. */

const option = {
    name : 'test',
    width : 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};


option.makeTest();

//console.log(option.name);

// для удаления элемента из объекта используется оператор delete
/* 
delete option.name;

console.log(option); */

// для того что бы перебрать свойства объекта используется конструкция for in

/*  for(let key in option) {
    console.log(`Свойство ${key}, имеет значение ${option[key]}`);
} */

//Рекурсия перебор внутри перебора

/* for(let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i}, имеет значение ${option[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${option[key]}`);
    }
}  */

//console.log(option["colors"]["border"]);

//Свойства и методы объекта

console.log(Object.keys(option).length);

// Объекты это структуры которые могут сохранять в себе абсолютно любые типы данных в формате ключ-значение
// Что бы перебрать можно использовать конструкцию for in.
// Получать свойство объекта можно либо через точку, либо через квадратные скобки.
// Для получения длинны объекта можно использовать метод Object.keys(option).length
// Object.keys(option) - создает массив со всеми ключами объекта
// Для того чтобы объект умел что то делать внутри него мы можем записывать функции (методы нашего объекта)
// Свойства акцессоры - это get и set

// Деструктуризация объекта
// Если необходимо достучаться до вложенных свойств можно использовать конструцкцию option["colors"]["border"] но это не лучший метод
// Лучше использовать следующее.

const options = {
    name : 'test',
    width : 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

const {border, bg} = options.colors;

console.log(border);

//JavaScript считается объектно ориентированным языком и все сущности внитри сводятся к объектам.
