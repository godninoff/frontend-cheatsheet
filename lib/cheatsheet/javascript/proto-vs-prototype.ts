import { q } from "../helpers";

export const js8 = q(
  "js-8",
  "js",
  "В чём отличие __proto__ от prototype?",
  `Главное правило:

**prototype — у функции.**  
**__proto__ — у объекта.**

Простой пример:

\`\`\`js
const user = {};

console.log(user.__proto__);
// Object.prototype
\`\`\`

У объекта \`user\` есть \`__proto__\` — ссылка на его прототип.

Теперь функция:

\`\`\`js
function User() {}

console.log(User.prototype);
// объект-прототип
\`\`\`

У функции \`User\` есть \`prototype\` — объект, который используется как прототип для объектов, созданных через \`new\`.

Создадим объект:

\`\`\`js
const user = new User();

console.log(user.__proto__ === User.prototype);
// true
\`\`\`

Получается:

\`\`\`
User.prototype
      ↑
      |
user.__proto__
\`\`\`

То есть \`User.prototype\` и \`user.__proto__\` указывают на один и тот же объект.

Проще всего запомнить:

**prototype → свойство функции**

**__proto__ → прототип объекта**

В современном JavaScript для получения прототипа объекта лучше использовать:

\`\`\`js
Object.getPrototypeOf(user);
\`\`\``,
  8,
);
