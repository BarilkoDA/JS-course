'use strict';

/* Callback- функции - иногда класические функции используются в не совсем очевидных местах 
и в не совсем очевидных конструкциях. */

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// Если функции в коде идут одна за другой это не значит что они будут выполняться так же.

/* Callback - функции - это функция которая должна быть выполнена после того 
как другая функция завершит свое выполнение. */

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); // функция передается без круглых скобках


/* learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
}); */


// Еще не ясно....

/* function first(callback) {
    setTimeout(function() {
        console.log(1);
    }, 500);
    callback();
}

function second() {
    console.log(2);
}

first(second); */
//second();