import { q } from "../helpers";

export const js6 = q(
  "js-6",
  "js",
  "Какие есть способы объявления функций в JavaScript?",
  `В JavaScript есть несколько основных способов создать функцию.

1. Function Declaration — объявление функции

\`\`\`js
function greet(name) {
  return 'Привет, ' + name;
}

console.log(greet('Anton'));
// Выведет: Привет, Anton
\`\`\`

Такую функцию можно вызвать до места её объявления. Это связано с hoisting: Function Declaration полностью поднимается в своей области видимости.

2. Function Expression — функциональное выражение

\`\`\`js
const greet = function(name) {
  return 'Привет, ' + name;
};

console.log(greet('Anton'));
// Выведет: Привет, Anton
\`\`\`

В отличие от Function Declaration, такую функцию нельзя вызвать до инициализации переменной. Переменная greet находится в TDZ до строки с её объявлением.

3. Arrow Function — стрелочная функция

\`\`\`js
const greet = (name) => {
  return 'Привет, ' + name;
};

console.log(greet('Anton'));
// Выведет: Привет, Anton

const sum = (a, b) => a + b;
console.log(sum(2, 3));
// Выведет: 5
\`\`\`

Главное отличие стрелочной функции — у неё нет собственного this. Она использует this из внешнего контекста.

\`\`\`js
const user = {
  name: 'Anton',
  regular() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

user.regular();
// Anton

user.arrow();
// undefined
\`\`\`

У regular-функции this определяется при вызове через user.regular(). У стрелочной функции собственного this нет, поэтому она берёт this из внешнего окружения.

4. Method Definition — метод объекта или класса

\`\`\`js
const user = {
  name: 'Anton',
  greet() {
    console.log('Привет, ' + this.name);
  },
};

user.greet();
// Выведет: Привет, Anton
\`\`\`

Здесь greet — метод объекта.

Коротко:

Function Declaration:
function foo() {}

Function Expression:
const foo = function() {}

Arrow Function:
const foo = () => {}

Method:
const obj = {
  foo() {}
}

Главные отличия:

Function Declaration — можно вызвать до объявления.

Function Expression и Arrow Function — нельзя использовать до инициализации переменной.

Arrow Function — не имеет собственного this, arguments, super и не может использоваться с new.

Обычная функция может иметь собственный this, arguments и использоваться как конструктор через new.`,
  6,
);
