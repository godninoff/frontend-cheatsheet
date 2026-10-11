import { q } from "../helpers";

export const js21 = q(
  "js-21",
  "js",
  "Что такое функция высшего порядка?",
  `Функция высшего порядка (Higher-Order Function, HOF) — это функция, которая работает с другими функциями: принимает функцию как аргумент, возвращает функцию или делает и то и другое.

Например, map() принимает callback:

\`\`\`js
const numbers = [1, 2, 3];
const result = numbers.map((number) => number * 2);
console.log(result); // [2, 4, 6]
\`\`\`

Здесь map() — функция высшего порядка, потому что она принимает другую функцию.

Другой пример — функция, которая возвращает функцию:

\`\`\`js
function multiplyBy(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const multiplyBy2 = multiplyBy(2);
multiplyBy2(5); // 10
\`\`\`

Здесь multiplyBy() — функция высшего порядка, потому что она возвращает другую функцию.

Callback — это функция, которую передают другой функции для выполнения позже или в определённый момент. Поэтому callback часто является частью функций высшего порядка.

Основные примеры HOF: map(), filter(), reduce(), forEach(), some(), every(), а также функции-обёртки.`,
  21,
);
