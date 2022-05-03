"use strict";

/* const arr = [1, 2, 3, 6, 8]; */

//метод для работы с концом массива

//arr.pop(); // Удаляет элемент с конца массива
//arr.push(10); // Добавляет элемент в конец массива


//Есть методы для работы с началом массива но они редко используются.
//При работе с началом массива требуется переиндексация всего массива.

/*  shift
    unshift */
/* 
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 
// for of - перебор массива

for (let value of arr) {
    console.log(value);
} */

//.length - последний индекс + 1

// метод для гибкого перебора массива c callback функцией

/* arr.forEach(function(item, i, arr) {  
    console.log(`${i}: ${item} внутри массива ${arr}`);
});  */

const str = prompt("", "");
const products = str.split(", "); // разделитель строки по элементу
console.log(products);

//вывести масси в виде строки через разделитель
console.log(products.join('; '));

//сортировка элементы внутри массива как строки.

products.sort();

//Для сортировка массива для сортировки чисел

function compareNum(a, b) {
    return a - b;
}
const arr = [2, 13, 26, 8, 10];
console.log(arr);

arr.sort(); // сортировка как строки
console.log(arr);

arr.sort(compareNum); // сортировка как числа
console.log(arr);

// Псевдомассив

// Псевдо массив структура которая хранит данные по порядку как массив но не имеет никаких методов массива.