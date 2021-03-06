/*
document - DOM структура сайта
window - область экрана со страницей или приложением
screen - весь видимый монитор

*/

const box = document.querySelector('box');


const width = box.clientWidth; // ширина без маргинов и бордеров
const height = box.clientHeight; // высота без маргинов и бордеров

//Стиль box-sizung: border-box; - меняет поведение блочной структуры. paffings будут сключены в ширину блока

const width2 = box.offsetWidth; // ширина с учетом полосы прокрутки, маргинов и бордеров
const height2 = box.offsetHeight; // высота с учетом полосы прокрутки, маргинов и бордеров

const width3 = box.scrollWidth; // Полная высота элемента с учетом прокрутки
const height3 = box.scrollHeight; // Полная высота элемента с учетом прокрутки (Полоса прокрутки не включается)


// Применение по клику отображать все содержимое внутри прокрутки.

const btn = document.querySelector('button'); // селектор по тегу

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight;
});

console.log(box.scrollTop); // отобразить количество прокрученного пространства.

// Свойства scrollTop и scrollLeft могут быть модифицированны.

/*
Координаты в JS рассчитываются с левого верхнего угла экрана.
    координаты right в JS расчитываются от левой границы и до правого края элемента
    bottom в JS расчитывается от верхней границы до нижней границы элемента

координаты right В CSS координаты расчитываются от правой границы до элемента
bottom в CSS расчитывается основание от низа (с низу до элемента)
*/

console.log(box.getBoundingClientRect); // показать все координаты.
console.log(box.getBoundingClientRect.top); // показать только конкретныю координату. К примеру значение top-a

// Как получить стили которые были применены к элементу в CSS
/*
Используя .getComputedStyles мы можем получить стили которые применены на данный момент к элементу.
Важно мы можем только прочитать данные стили, мы не можем их изменить.
*/

const style = window.getComputedStyle(box);

console.log(style);
console.log(style.display); // получение конкретного значения.

/*
Особенности
1) при помощи данного метода мы можем получить стили псевдоэлементов.
*/
const style2 = window.getComputedStyle(box, ); // Для этого указывается второй аргумент и мы получаем стили для псевдоэлемента
/*
2) компьютед стили и инлайн стили это не одно и то же
компьютед стили идут из CSS и изначально появяться на странице
Их мы можем только получить и проверить на соответствие но не перезаписать

инлайн стили - появляются внутри верстки и прописываются прямо в тег
мы може его получить, изменить, перезаписать
*/
document.documentElement.scrollTop = 0; // Страница прокрутиться вверх.

window.scrollBy(0, 400); // выполняется скролл на 400 пикселей от текущего положения.

window.scrollTo(0, 400); // выполняется скролл на 400 пикселей от начала страницы.