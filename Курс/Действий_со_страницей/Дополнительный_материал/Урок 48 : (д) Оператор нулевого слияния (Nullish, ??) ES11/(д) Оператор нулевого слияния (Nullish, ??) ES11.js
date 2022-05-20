// Нулиш оператор

const box = document.querySelector('.box');

const newHeight = 100,
      newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`;
    elem.style.width = `${w || 200}px`;
}

changeParams(box, newHeight, newWidth);
changeParams(box); // Значение ширины и высоты подставяться по умолчанию

// Если передается false значение (их 5) в boolean представлении используется true значение.
/* 
0
пустая строка 
null 
false
NaN 
*/
/* Можно воспользоваться оператором нулевого слияния.box
Он реагирует не на все фолми а только на null и undefined */

let userName;

console.log(userName ?? 'User'); // похож на оператор или но работает не со всеми 5 значениями false в логическом контексте, а только с null и undefined

//Нулиш оператор можно так же испольщовать на проверку значений.box

let newUserName;
let newUserKey;

console.log(newUserName ?? newUserKey ?? 'User');

// У нулиш оператора одинаковый приоритет с оператором логического или

/* При выполнении логических операций всегда необходимо обращать внимание на приоритет операторов.box
К примеру скобки () - имеют самый высокий приоритет. */

//Логическое и и нулиш оператор не может быть смешан внутри одного выражения.