/* 
    1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
    2) Чему равно такое выражение: [ ] + false - null + true ?
    3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
    4) Чему равна сумма [ ] + 1 + 2?
    5) Что выведет этот код: alert( "1"[0] )?
    6) Чему равно 2 && 1 && null && 0 && undefined ?
    7) Есть ли разница между выражениями? !!( a && b ) и (a && b)?
    8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
    9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
    10) Что выведет этот код: alert( +"Infinity" ); ?
    11) Верно ли сравнение: "Ёжик" > "яблоко"?
    12) Чему равно 0 || "" || 2 || undefined || true || falsе ?
 */

//Ответы 
// + 1) Выведится 5 а только после этого добавиться 1*/ // Ответ верный
let x = 5; 
console.log(x++);
/* - 2)
Операторы выполняются друг за другом
Когда мы работаем с пустым массивом в операциях он приводится к строке
*/ 
console.log([] + false - null + true); // - NaN


console.log(typeof([])); // - object
console.log(typeof([] + false)); // - string
console.log(typeof([] + false - null)); // - number
console.log(typeof([] + false - null + true)); // - number

// +/- 3) либо 2 либо ошибка
let y = 1; 
let z = y = 2; 
alert(z);

// - 4) 
console.log([ ] + 1 + 2); // 12 - пустая строка + 1 + 2

// + 5) Выведет 1. Строка также массив. Выведет первый элемент массива под 0 ключем
console.log( "1"[0] );

// - 6) flase. только если все true тогда результат true
/* Логический оператор И
Оператор И всегда запинается на лжи
Если есть null будет возвращать null.
После обработки null происходит return. Дальнейшие действи не выполняются
*/
console.log(2 && 1 && null && 0 && undefined);

// - 7) Нет. Разные виды преобразования в булиновый тип через двойное отрицание и через нативный
console.log(2 && 1); // 1
console.log(!!(2 && 1)); // true
console.log(!!(1 && 2) === (1 && 2)); // false

// - 8) true записть (false or true and true or true)
/*
Операторы срабатывают по таблице приоритетов операторов
Логический оператор И выполняется быстрее чем логический оператор ИЛИ
ИЛИ запинастся на правде
*/
console.log(null || 2 && 3 || 4 ); // Результат 3

console.log(2 && 3); // Результат 3
console.log(null || 3); // Результат 3
console.log(3 || 4); // Результат 3

// + 9) Нет, вравниваются ссылочные значения.

let a = [1, 2, 3], 
    b = [1, 2, 3]; 
    
console.log(a == b);

// - 10) Ошибку. Текст не может быть преобразован в число

console.log(+"Infinity"); // Infinity

// +/- 11) Нет результат false. Любое строчное значение(не пустая строка - true) true > true
/*
Сравнивание строк идет через сравнение значенй юникода посимвольно
*/

console.log("Ёжик" > "яблоко"); // false
console.log("ёжик" > "яблоко"); // true

// - 12) true используется логическое или. если один true то true

console.log(0 || "" || 2 || undefined || true || falsе);  // 2

/*
0 - в логическом контексте - false
"" - пустая строка - false
2 - true ИЛИ запинается на true и выводит 2
дальше код не идет
*/