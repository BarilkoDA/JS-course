/*
Inline стили ясляютсся самыми важными

для передачи стилей в элемент используем

const box = document.getElementById('box');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

Для назначения нескольких инлайн стилец за один раз используется cssText:

box.style.cssText = 'background-color: blue; width: 500px';

Можно использовать бэктики и передавать значения через переменные

box.style.cssText = `background-color: blue; width: ${value}px`;

Для выполнений идентичных действий над несколькими элементами за один раз 
можно использовать цикл, for of, forEach:

---Циклы: 

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

Практически не будем использовать так как у нас есть перебирающие методы

---forEach

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

### Методы для генерации элементов внутри страницы ###

Создание div
const div = document.createElement('div'); - Элемент создается внутри JS на страние он никак не появится.

Создание текстового узла без оболочки тега.
const text = document.createTextNode('Тут был я');

---Для полной модирнизации элемента используется изменение css классов стилей

div.classList.add('black');

### современные методы для работы со страницей ###

В устаревших браузерах данные методы работать не будут
----

document.body.append(div); //добавление div в конец body

document.querySelector('.wrapper').append(div); //добавление div в конец wrapper

document.body.prepend(div); //добавление div в начало body

hearts[0].before(div); //добавление div перед первым элементом hearts

hearts[0].after(div); //добавление div после первого элемента hearts 

circles[0].remove(); // Удаление первого элемента circles

hearts[0].replaceWith(circles[0]); // Замена одного элемента на второй.

----

### Старые варианты работы ###

wrapper.appendChild(div); // добавление div в конец wrapper

wrapper.insertBefore(div, hearts[1]); //добавление div перед элементом hearts

wrapper.removeChild(hearts[1]); // Удаление второго элемента hearts

wrapper.replaceChild(circles[0], hearts[0]); // Замена одного элемента на второй.

### Динамически работа с данными HTML ###

div.innerHTML = '<h1>Hello World</h1>'; // Динамически вставлять данные HTML в блок

div.textContent = 'Hello'; // Динамически вставлять текста в блок. При помещении HTML структуры будет отображен как текст.

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Позволяет вставить данные HTML перед элементом

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Позволяет вставить данные HTML в начало элемента

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Позволяет вставить данные HTML в конец элемента

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Позволяет вставить данные HTML после элемента
*/