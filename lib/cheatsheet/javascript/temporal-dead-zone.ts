import { q } from "../helpers";

export const js28 = q(
  "js-28",
  "js",
  "Temporal Dead Zone?",
  `TDZ (Temporal Dead Zone) — это временная зона, в которой переменная, объявленная через let или const, уже существует в своей области видимости, но обращаться к ней до строки объявления нельзя.

Пример:

\`\`\`js
console.log(name);
let name = 'Anton';
// ReferenceError: Cannot access 'name' before initialization
\`\`\`

Почему так происходит:

\`\`\`js
let name = 'Anton';
\`\`\`

Упрощённо можно представить выполнение так:
1. JavaScript создаёт переменную name.
2. Но пока не доходит до строки let name = 'Anton', переменная находится в TDZ.
3. На строке let name = 'Anton' переменная инициализируется.
4. После этого к ней можно обращаться.

То есть:

\`\`\`js
// TDZ начинается
console.log(name); // ❌ ReferenceError
let name = 'Anton'; // TDZ заканчивается
console.log(name); // ✅ Anton
\`\`\`

То же самое работает с const:

\`\`\`js
console.log(age);
const age = 25;
// ReferenceError: Cannot access 'age' before initialization
\`\`\`

Важно отличать это от var:

\`\`\`js
console.log(age);
var age = 25;
// Выведет: undefined
\`\`\`

У var переменная поднимается и сразу получает значение undefined, поэтому ошибки при обращении до объявления нет.

У let и const переменная тоже поднимается, но до инициализации находится в TDZ.

Пример с блоком:

\`\`\`js
{
  console.log(name); // ❌ ReferenceError
  let name = 'Anton';
  console.log(name); // ✅ Anton
}
\`\`\`

TDZ действует только внутри соответствующей области видимости.

Зачем нужна TDZ: она помогает избежать ситуаций, когда переменная используется до того, как ей было присвоено нормальное значение.

Коротко:

var:
объявление → undefined → можно обращаться

let / const:
объявление → TDZ → инициализация → можно обращаться

Важно: TDZ заканчивается именно в момент выполнения объявления и инициализации переменной, а не просто при наличии строки объявления.`,
  28,
);
