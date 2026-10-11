import { q } from "../helpers";

export const js19 = q(
  "js-19",
  "js",
  "Какие знаешь статические методы Promise?",
  `Основные статические методы Promise:

1. Promise.all() — ждёт выполнения всех промисов. Если хотя бы один завершился с ошибкой, весь Promise.all() будет rejected.

\`\`\`js
const result = await Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);
// result: [1, 2, 3]
\`\`\`

2. Promise.allSettled() — ждёт завершения всех промисов независимо от результата.

\`\`\`js
const result = await Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('Ошибка'),
]);

// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'Ошибка' }
// ]
\`\`\`

3. Promise.race() — возвращает результат первого промиса, который завершился: неважно, успешно или с ошибкой.

\`\`\`js
const result = await Promise.race([
  fetch('/api'),
  timeout(5000),
]);
\`\`\`

4. Promise.any() — ждёт первый успешно выполненный промис. Ошибки отдельных промисов игнорируются, пока не будет успешного результата. Если все завершились с ошибкой, Promise.any() отклоняется с AggregateError.

5. Promise.resolve() — создаёт уже выполненный fulfilled Promise из переданного значения.

\`\`\`js
const promise = Promise.resolve(10);
\`\`\`

6. Promise.reject() — создаёт уже отклонённый rejected Promise.

\`\`\`js
const promise = Promise.reject('Ошибка');
\`\`\`

7. Promise.withResolvers() — позволяет получить отдельно promise, resolve и reject. Удобно, когда нужно управлять завершением промиса из другого места.

\`\`\`js
const { promise, resolve, reject } = Promise.withResolvers();
\`\`\`

8. Promise.try() — современный метод для запуска функции и преобразования как её обычного результата, так и синхронной ошибки в Promise. Поддержка зависит от среды выполнения.

Главное различие методов:
- all — нужен результат всех, ошибка одного ломает всё
- allSettled — дождаться всех независимо от результата
- race — первый завершившийся
- any — первый успешно завершившийся
- resolve — создать fulfilled Promise
- reject — создать rejected Promise`,
  19,
);
