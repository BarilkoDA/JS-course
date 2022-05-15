"use strict";


/* Как загружается страница

Как только файл html попадает в браузер, браузер идентифицирует страницу как html 
начинает прогрузку.

смотрит что это html с определенным языком
начинает прогрузку head
    загружает метатеги
    генериеут title
    подгружает стили

После head переходит в body и начинает строить тег за тегом.
В конце загружает скриптовую структуру и начинает работать с ней.

После этого страница загружается окончательно.
На этом загрузка страницы завершается.

---

Если тег script расположить в head а в скрипте будет взаимодействие со страницей мы получим ошибку
    Данная проблема может быть решена если использовать  DOMContentLoaded - Дождаться прогрузки структуры страницы

Также скрипт на время своей работы блокирует загрузку страницы.
    Данная проблема может быть решена если использовать Async и defer */


/* 
атрибут defer прописывается как html атрибут в index.html

<script defer src="js/script.js"></script> 

атрибут defer сообщает браузеру что он должен продолжать загружать страницу и загружать скрипт в фоновом режиме.

Основные свойства defer:

1) скрипты с defer никогда не блокируют страницу
    Скрипт загружается в фоновом режиме

2) Скрипты с defer всегда выполняются когда дом дерево уже готовы
    Но они срабатывают даже раньше чем DOMContentLoaded

3) Скрипты с defer сохраняют порядок относительно друг друга. Скрипты загружаются последовательно

defer используется для соблюдения порядка подключенных утилит и мы точно уверены, что страница готова.

*/

/*
атрибут async прописывается как html атрибут в index.html

<script async src="js/script.js"></script> 

Основные свойства и особенности async:

1) Страница не ждет ассинхронных скриптов 
    Содержимое просто обрабатывается и отображается.

2) События DOMContentLoaded и ассинхронные скрипты не ждут друг друга.
    Если ставим атрибут async скрипт загружается в фоновом режиме и начинает выполняться по факту завершения загрузки.

3) Остальные скрипты не ждут async и async-скрипты не дожидаются остальных скриптов.
    Они становятся абсолютно не зависимыми.

Используется для подключения сторонних скрипты которые не подвязаны под DOM структуру или иную функциональность
К примеру метрики и сцетчики
Им необходимо уловить, что пользователь зашел на сайтб страницу.
 */

/*
Итоги:

Когда мы используем async мы должны быть уверенны, что скрипт абсолютно не зависит от DOM структуры.
Так же он не должен зависить от каких либо скриптов. Он загрузился и сразу может выполняться.

*/

// Еще один способ объявление скрипта из самого скрипта (динамическое формирование скриптов)

const script = document.createElement('script');
script.src = "js/test.js";

// Для того что бы управлять порядком загрузки скриптов мы можем использовать .async = false;
script.async = false;

document.body.append(script);

// Динамически загружаемые скрипты ведут себя как async