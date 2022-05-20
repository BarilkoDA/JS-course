/* 
Управление временем выполнения скриптов

Функции выполняются не сразу а спустя какой то промежуток времени.
Или вообще не могут повторяться с определенным промежутком времени

Для того, что бы запустить функцию через определенный промежуток времени 
существует конструкция которая называется setTimeout
*/

/* const timerID = setTimeout(function (){
    console.log("Hello");
}, 2000);

//Так же функция может принимать аргументы которые будут аргументами внутри.


const timerIDv2 = setTimeout(logger, 2000);

function logger() {
    console.log('text');
}

const timerIDv3 = setTimeout(() => {}, 2000);

clearInterval(timerIDv3); // Прерывает задержку интервала */

// setInterval() - функция для повтора определенного промежутка времени

////
const btn = document.querySelector('.btn');
let timerIDs, 
    i = 0;

function logger() {
    if (i === 3) {
        clearInterval(timerIDs1);
    }
    console.log('text');
    i++;
}

const timerIDs1 = setTimeout(logger, 500);





btn.addEventListener('click', (event) => {
    const timerIDs = setInterval(logger, 500);
});

/*
Чем рекурсивный setTimeout лучше чем setInterval

Когда таймер с интервалом работает setInterval не учитывает сколько будет работать функция внутри него.

setInterval будет запускать функцию не смотря на то завершиться функция или нет.
Если функция выполняется дольше чем указана задержка setInterval считает что задержка уже прошла
и сразу будет вызвана функция
*/

// Написание setInterval через рекурсию setTimeout

/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */

// Создание анимации

function myAnimation () {
    const elem = document.querySelector('box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);