import { q } from "../helpers";

export const js29 = q(
  "js-29",
  "js",
  "Какие есть циклы в JavaScript?",
  `В JavaScript есть несколько основных способов перебора.

1. for — классический цикл, когда нужно управлять счётчиком, условием и шагом:

\`\`\`js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Выведет:
// 0
// 1
// 2
\`\`\`

2. while — выполняется, пока условие истинно:

\`\`\`js
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// Выведет:
// 0
// 1
// 2
\`\`\`

3. do...while — тело выполняется минимум один раз, даже если условие изначально false:

\`\`\`js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);

// Выведет:
// 0
// 1
// 2
\`\`\`

Даже если условие изначально false, тело выполнится один раз:

\`\`\`js
let i = 5;

do {
  console.log(i);
} while (i < 3);

// Выведет:
// 5
\`\`\`

4. for...of — перебирает значения итерируемого объекта. Используется для массивов, строк, Set и других iterable:

\`\`\`js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}

// Выведет:
// 10
// 20
// 30
\`\`\`

5. for...in — перебирает перечисляемые ключи объекта:

\`\`\`js
const user = {
  name: 'Anton',
  age: 25,
};

for (const key in user) {
  console.log(key, user[key]);
}

// Выведет:
// name Anton
// age 25
\`\`\`

Для массивов for...in обычно не используют — он перебирает индексы, а не значения:

\`\`\`js
const arr = ['a', 'b', 'c'];

for (const key in arr) {
  console.log(key);
}

// Выведет:
// 0
// 1
// 2
\`\`\`

Для получения значений массива используют for...of:

\`\`\`js
for (const value of arr) {
  console.log(value);
}

// Выведет:
// a
// b
// c
\`\`\``,
  29,
);
