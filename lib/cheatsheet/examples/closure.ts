import { q } from "../helpers";

export const examples1 = q(
  "examples-1",
  "examples",
  "Задача на замыкание",
  `Что выведет код?

\`\`\`ts
const createCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
\`\`\`

Решение:

Будет:

\`\`\`
1
2
3
\`\`\`

createCounter возвращает внутреннюю функцию, которая замыкает переменную count.

Переменная count создаётся при вызове createCounter и сохраняется во внешнем лексическом окружении. Каждый следующий вызов counter() работает с той же переменной.

Это и есть замыкание: функция сохраняет доступ к переменным своего внешнего окружения даже после завершения внешней функции.`,
  1,
);
