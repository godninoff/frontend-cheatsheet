import { q } from "../helpers";

export const js22 = q(
  "js-22",
  "js",
  "Отличие null от undefined?",
  `undefined — значение «ничего не задано». JavaScript использует его, когда значение отсутствует само по себе.

Например:

\`\`\`js
let name;
console.log(name); // undefined

const user = {};
console.log(user.name); // undefined

function getName() {}
console.log(getName()); // undefined
\`\`\`

null — это когда мы сами явно говорим: «здесь сейчас ничего нет».

\`\`\`js
const user = {
  name: null,
};

console.log(user.name); // null
\`\`\`

То есть простое правило:
- undefined — значение не задано
- null — мы сами явно указали отсутствие значения

Ещё одно важное отличие:

\`\`\`js
typeof undefined; // "undefined"
typeof null; // "object"
\`\`\`

typeof null === "object" — это историческая особенность JavaScript и считается одним из известных странных мест языка.

Также:

\`\`\`js
null == undefined; // true
null === undefined; // false
\`\`\`

При сравнении === это разные значения.`,
  22,
);
