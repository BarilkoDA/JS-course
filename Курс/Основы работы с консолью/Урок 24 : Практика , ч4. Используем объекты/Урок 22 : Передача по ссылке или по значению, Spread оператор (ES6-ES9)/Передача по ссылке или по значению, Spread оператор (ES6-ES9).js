"use strict";

//Передача данных по ссылке и по значению.

//При работе с примитивными типами данных (строки, числа...) они передаются по значению.

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


//Когда работаем с объектами (специфические объекты, массивы, функции) значения передаются по ссылке
//То есть не создается новый объект а передается ссылка на существующий и при работе с топией мы работаем с начальным объектом

const obj = {
    a: 5,
    b: 1
};

/* const copy = obj; // Не объект а ссылка на объект (передача по ссылке)

copy.a = 10;

console.log(copy);
console.log(obj);  */

// Для создания копии объекта существует несколько способов
// Через цикл

 function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
 }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // Клонирование объекта

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// При клонировании объекта существует поверхностное и глубокое клонирование объекта
// При поверхностном клонировании клонируются только все обычные свойства
// вложенные структуры (объект и массив) передаются как ссылки

// Через метод Object.assign создается независимая поверхностная копия объекта

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

// Для создания копии массива существует метод slice()
// Позволяет скопировать весь массив

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = '1231231231';

console.log(newArray);
console.log(oldArray);

// Создание поверхностной копии с исаользованием оператора разворота(спред оператор) (новейшие стандарты ES6 и ES8)
// В ES6 данный оператор появился для массива
// В ES9 для объекта

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//Клонирование через спред оператор

const array = ['a', 'b'];

const copyArray = [...array];

const oldObj = {
    one: 1,
    two: 2
};

const newOgj = {...oldObj};