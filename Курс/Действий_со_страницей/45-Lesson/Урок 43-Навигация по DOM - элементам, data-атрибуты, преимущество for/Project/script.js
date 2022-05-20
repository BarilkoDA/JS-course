console.log(document.body); // Обратиться к body
console.log(document.head); // Обратиться к head
console.log(document.documentElement); // HTML со всем содержимым которое есть

// Родительский элемент возможно получить при помощи 3-ех команд

//1) Через .childNodes
console.log(document.body.childNodes); // Получение псевдомассива со всеми нодами()узлами которые есть у родителя
// Для получения всех элементов мы не можем использовать forEach но можем построить цикл for of

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; // прерывает текущий шаг и обрабатывает следующий
    }
    console.log(node);
}


/* 
Текстовые узелы который идет в псевдомассиве это текстовые элементы переноса строки
Их мы не видим в верстке. 

Разница между дом элементами и дом узлами

Каждая сущность которая есть на странице - узел.
Но не каждый узел - элемент.

Все теги - элементы
Все переносы строкб текстовые элементы которых мы не видим - узлы

Существует 2 свойства которые позволяют получить либо первого либо последнего ребунка родителя.

*/
console.log(document.body.firstChild); // первый узел
console.log(document.body.firstElementChild); // первый элемент

console.log(document.body.lastChild); // последний узел
console.log(document.body.lastElementChild); // последний узел

//2) 
console.log(document.querySelector('#current').parentNode.parentNode); // получение родителя
console.log(document.querySelector('#current').parentElement); // получение родителя (Точно будем знать, что получаем элемент)


/* 
data атрибуты существуют для ориентирования по ним в скриптах

data-current
data-close
*/
console.log(document.querySelector('[data-current="3"'));

//3) 
console.log(document.querySelector('[data-current="3"').previousSibling); // получение предидущего узла
console.log(document.querySelector('[data-current="3"').nextSibling); // получение следующего узла

console.log(document.querySelector('[data-current="3"').previousElementSibling); // получение предидущего узла
console.log(document.querySelector('[data-current="3"').nextElementSibling); // получение следующего элемента
