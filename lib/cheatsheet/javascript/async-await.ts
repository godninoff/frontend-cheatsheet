import { q } from "../helpers";

export const js18 = q(
  "js-18",
  "js",
  "Что такое async/await?",
  `async/await — это удобный синтаксис для работы с Promise.

async — перед функцией означает, что функция всегда возвращает Promise:

\`\`\`js
async function getNumber() {
  return 10;
}

getNumber().then((value) => {
  console.log(value);
});
// 10
\`\`\`

Даже если внутри функции вернуть обычное значение, наружу всё равно вернётся Promise.

await используется внутри async-функции и ждёт завершения Promise:

\`\`\`js
async function getData() {
  const result = await fetch('/users');
  console.log(result);
}
\`\`\`

Пока Promise находится в состоянии pending, выполнение этой async-функции приостанавливается.

Когда Promise становится fulfilled, await возвращает его результат:

\`\`\`js
const result = await Promise.resolve(10);
console.log(result);
// 10
\`\`\`

Если Promise становится rejected, await выбрасывает ошибку:

\`\`\`js
async function test() {
  const result = await Promise.reject('Ошибка');
}
// Ошибка
\`\`\`

Поэтому ошибки обычно обрабатывают через try/catch:

\`\`\`js
async function test() {
  try {
    const result = await Promise.reject('Ошибка');
  } catch (error) {
    console.log(error);
  }
}
// Ошибка
\`\`\`

Важно: await не блокирует весь JavaScript и другие задачи. Он приостанавливает только выполнение текущей async-функции.

Например:

\`\`\`js
async function test() {
  console.log('1');
  await Promise.resolve();
  console.log('2');
}

test();
console.log('3');

// Выведет:
// 1
// 3
// 2
\`\`\`

После await выполнение функции продолжится позже.

Если await получает не Promise, значение автоматически оборачивается в уже выполненный Promise:

\`\`\`js
const value = await 10;
console.log(value);
// 10
\`\`\`

Коротко:

async → функция всегда возвращает Promise

await → ждёт Promise и возвращает его результат

fulfilled → await получает значение

rejected → await выбрасывает ошибку

await приостанавливает только текущую async-функцию, а не весь JavaScript.`,
  18,
);
