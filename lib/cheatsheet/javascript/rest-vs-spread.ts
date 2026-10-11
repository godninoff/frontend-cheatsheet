import { q } from "../helpers";

export const js30 = q(
  "js-30",
  "javascript",
  "Чем отличаются Rest и Spread?",
  `Rest и Spread используют одинаковый оператор \`...\`, но применяются для разных задач.

**Spread** — берёт содержимое массива или объекта и вставляет его элементы/свойства на это место.

\`\`\`ts
const numbers = [1, 2, 3];

const result = [0, ...numbers, 4];

console.log(result);
// [0, 1, 2, 3, 4]
\`\`\`

Здесь оператор \`...\` разворачивает элементы массива.

Spread также используется для копирования и объединения объектов:

\`\`\`ts
const user = {
  name: "Anton",
  age: 25,
};

const updatedUser = {
  ...user,
  age: 26,
};

console.log(updatedUser);
// { name: "Anton", age: 26 }
\`\`\`

**Rest** — собирает несколько значений в массив или объект.

Например, в параметрах функции:

\`\`\`ts
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(1, 2, 3));
// 6
\`\`\`

Здесь \`...numbers\` собирает все переданные аргументы в массив.

Rest также используется при деструктуризации:

\`\`\`ts
const numbers = [1, 2, 3, 4];

const [first, ...rest] = numbers;

console.log(first);
// 1

console.log(rest);
// [2, 3, 4]
\`\`\`

### Главное отличие

**Spread — разворачивает значения:**

\`\`\`ts
const arr = [1, 2, 3];

const result = [...arr];

console.log(result);
// [1, 2, 3]
\`\`\`

**Rest — собирает значения:**

\`\`\`ts
const fn = (...args) => {
  console.log(args);
};

fn(1, 2, 3);
// [1, 2, 3]
\`\`\`

Простое правило для запоминания:

**Spread — разложить. Rest — собрать.**`,
  30,
);
