"use strict";

/*
Рекурсия - Вызов функции внутри самой себя.

*/
// Через цикл
/* function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        //result = result * a;
        result *= a;
    }

    return result;
} */

//через функцию возведения в степень
/* function pow(a, b) {
    if (b === 1)
    {
        return a;
    } else if (b === 0) {
        return 1;
    } else {
        return a * pow(a, b - 1);
    }
}

console.log(pow(2, 0)); // 1
console.log(pow(2, 1)); // 2
console.log(pow(2, 2)); // 4
console.log(pow(2, 3)); // 8
console.log(pow(2, 4)); // 16
 */
/* 
Термины рекурсии 

1) База рекурсии
Случай который приводит сразу к завершению функции

Пример: 
if (b === 1)
    {
        return a;
    }

По итогу все прийдет к базе и все будет возвращаться.
База рекурсии единица. НА ней все завершиться

2) Шаг рекурсии
Запуск вложенной функции но с новым значением

Пример: 
, b - 1);
Шаг рекурсии по итогу позволит прийти к базе рекурсии.

3) Глубина рекурсии
Общее количество вложенных вызовов вместе с самым первым.

Пример: В нашем случае это аргумент b

Максимальная глубина.
Насколько рекурсия может нырнуть сама в себя.
Может варирроваться от сложности действий и возможности железа на котором запускается код.
В общем случае это порядка 10 000.

Выбор что использовать цикл или рекурсию всегда за разработчиком.
Но есть несколько нюансов:

- Итеративный подход (перебором при помощи цикла) обычно эффективнее.
Это связано с внутренним устройством языка и такими вещами как контексты и стек вызова.

- С другой стороны рекурсия делает функции проще хоть и имеет ограничения по глубине

- У каждого свои предпочтения и свои приемы но большинство програмистов склоняются к реализации через рекурсию.
Пример: Вычисление общего процента со всех курсов*/

let students = {
    js: [{
        name: 'John',
        progress: 100
    },
    {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Petee',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};
//console.log(Object.values(students));
// Через цикл:

/* function GetTotalProgressByIteration(data) {
    let total = 0,
        students = 0;
    
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            
            for(let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                students += subcourse.length;

                for(let i = 0; i < subcourse.length; i++) {
                    total += subcourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(GetTotalProgressByIteration(students)); */

// Через рекурсию: 


function GetTotalProgressByRecursion(data) {  
    if (Array.isArray(data)) {
        let total = 0;
        
        for(let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = GetTotalProgressByRecursion(subData);
            total[0] += subDataArr[0]; 
            total[1] += subDataArr[1]; 
        }
        return total;
    }

}
const result = GetTotalProgressByRecursion(students);

console.log(result[0] / result[1]);