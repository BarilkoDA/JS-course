'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector(".heart");

// изменять стили элемента

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

//btns[1].style.borderRadius = '100%';

//box.style.cssText = 'background-color: blue; width: 500px';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

/* hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
}); */

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

/* div.classList.add('black');

wrapper.append(div); */

circles[0].style.background = 'red';

//wrapper.insertBefore(div, hearts[1]);

//wrapper.removeChild(hearts[1]); // Удаление второго элемента hearts

//wrapper.replaceChild(circles[0], hearts[0]); // Замена одного элемента на второй.

//document.body.append(div); //добавление div в конец body

//wrapper.appendChild(div); // добавление div в конец wrapper

//document.querySelector('.wrapper').append(div); //добавление div в конец wrapper

//document.body.prepend(div); //добавление div в начало body

//hearts[0].before(div); //добавление div перед первым элементом hearts

//hearts[0].after(div); //добавление div после первого элемента hearts */

 

//circles[0].remove(); // Удаление первого элемента circles

//hearts[0].replaceWith(circles[0]);

//div.innerHTML = '<h1>Hello World</h1>'; // Динамически вставлять данные HTML в блок

// div.textContent = 'Hello'; // Динамически вставлять текста в блок. При помещении HTML структуры будет отображен как текст.

/* div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Позволяет вставить данные HTML перед элементом

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Позволяет вставить данные HTML в начало элемента

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Позволяет вставить данные HTML в конец элемента

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Позволяет вставить данные HTML после элемента */


