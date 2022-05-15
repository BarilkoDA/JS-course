"use strict";
// Tabs
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelectorAll('.tabcontent'),
          list = document.querySelector('.tabheader__items'),
          item = document.querySelectorAll('.tabheader__item');

function hideBlock () {
    wrapper.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    /* item.forEach (item => {
        item.classList.remove('tabheader__item_active');
    }); */
}
function showBlock(i = 0) {
    wrapper[i].classList.remove('hide');
    wrapper[i].classList.add('show', 'fade');
    //wrapper[i].classList.add('tabheader__item_active');
}

hideBlock();
showBlock();

list.addEventListener('click', (event) => {


    if (event.target /*&& event.target.classList.contains('tabheader__item')*/) {
        item.forEach((item, i) => {
            if (item == event.target) {
                hideBlock();
                showBlock(i);
            }
        });
    } 
});

// Timer
const deadLine = '2022-05-29';

function remainTime(endTime) {
    const remainTime = Date.parse(endTime) - new Date(),
          days = Math.floor(remainTime / (1000 * 60 * 60 * 24)),
          hours = Math.floor((remainTime / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((remainTime / (1000 * 60)) % 60),
          seconds = Math.floor((remainTime / 1000) % 60);

    if (remainTime <= 0) {
        return {
            'remainTime': 0,
            'days': 0,
            'hours': 0,
            'minutes': 0,
            'seconds': 0
        };
    } else {
        return {
            'remainTime': remainTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
}

function addZero(num) {
    if (num <= 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function setClock(selector, deadLine) {
    const timerSelector = document.querySelector(selector),
          days = timerSelector.querySelector('#days'),
          hours = timerSelector.querySelector('#hours'),
          minutes = timerSelector.querySelector('#minutes'),
          seconds =  timerSelector.querySelector('#seconds'),
          interval = setInterval(timer, 1000);
    timer();

    function timer() {
        const data = remainTime(deadLine);

        days.innerHTML = addZero(data.days);
        hours.innerHTML = addZero(data.hours);
        minutes.innerHTML = addZero(data.minutes);
        seconds.innerHTML = addZero(data.seconds);

        if (data.remainTime <= 0) {
            clearInterval(interval);
        }
    }  

    
}

setClock('.timer', deadLine);

setInterval(console.log('hello'), 1000);


});