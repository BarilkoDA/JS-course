"use strict";

/* 
1) В мобильных браузерах отсутствуют события мыши.
    клики,
    Наведение мыши,
    и т. д.
    
2) В мобильных браузерах есть тапы
    приконсновение к сенсору пальцем. 

*/

/*
Для мобильного браузера существует 6 событий
все они начинаются со слова touch.

1) touchstart - как только палец касается элемента
2) touchmove - когда палец сдвинулся
3) touchend - когда палец оторвался от элемента
4) touchenter - ведем пальцем по экрану и попадаем на какой либо элемент
5) touchleave - когда палец не оторвался а ушел с элемента
6) touchcancle - когда точка соприкосновения больше не регистрируется на поверхности. Палец вышел за пределы браузера.

Сенсорные события не будут работать с мышью.

touchmove - срабаывает при смещении на каждом пикселе

Дополнительные свойство у объекта когда мы работаем с мобильными устройствами:

Основных 3 свойства:
1)  event.touches - список прикосновений которые взаимодействуют с экраном.
Свойство хранит: 
    количество взаимодействий,
    Элемент с которым было взаимодействие,
    координаты, 
    угол наклона, 
    и т.д.

2) event.targetTouches - список прикосновений которые взаимодействуют с конкретным элементом.

3) event.changedTouches - список прикосновений которые участвуют в данном событии.
если было прикосновение 5 пальцев, а после один убрали то в действии end будет участвовать тот который убрали.
*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log("Start");
    });

    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();

        console.log("Move");
    });

    box.addEventListener('touchend', (e) =>{
        e.preventDefault();

        console.log("End");
    });
});