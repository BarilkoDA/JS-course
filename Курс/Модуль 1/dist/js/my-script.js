"use strict";

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


});