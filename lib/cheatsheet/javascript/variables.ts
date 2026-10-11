import { q } from "../helpers";

export const js1 = q(
  "js-1",
  "js",
  "В чём разница между var, let и const?",
  `Основные отличия var, let и const:

1. Область видимости

var имеет функциональную область видимости.
let и const имеют блочную область видимости.

Пример:

\`\`\`js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);
// Выведет: 10

console.log(b);
// ReferenceError

console.log(c);
// ReferenceError
\`\`\`

var виден за пределами блока {}, а let и const — нет.

2. Можно ли изменить значение

var и let можно переназначить:

\`\`\`js
let age = 20;
age = 25;
console.log(age);
// Выведет: 25

var name = 'Anton';
name = 'Alex';
console.log(name);
// Выведет: Alex
\`\`\`

const переназначить нельзя:

\`\`\`js
const age = 20;
age = 25;
// TypeError: Assignment to constant variable.
\`\`\`

При этом const не делает объект полностью неизменяемым:

\`\`\`js
const user = { name: 'Anton' };
user.name = 'Alex';
console.log(user.name);
// Выведет: Alex
\`\`\`

Здесь мы не меняем саму ссылку user, а изменяем содержимое объекта.

3. Повторное объявление

var позволяет объявить переменную с тем же именем:

\`\`\`js
var name = 'Anton';
var name = 'Alex';
console.log(name);
// Выведет: Alex
\`\`\`

let и const повторно объявить в одной области видимости нельзя:

\`\`\`js
let age = 20;
let age = 25;
// SyntaxError: Identifier 'age' has already been declared
\`\`\`

То же самое с const.

4. Hoisting

var поднимается и инициализируется значением undefined:

\`\`\`js
console.log(a);
var a = 10;
// Выведет: undefined
\`\`\`

Фактически можно представить это примерно так:

\`\`\`js
var a;
console.log(a);
a = 10;
\`\`\`

let и const тоже поднимаются, но до строки объявления находятся в Temporal Dead Zone (TDZ).

\`\`\`js
console.log(a);
let a = 10;
// ReferenceError
\`\`\`

То же самое происходит с const.

Поэтому переменную через let и const нельзя использовать до её объявления.

5. Что использовать на практике

В современном JavaScript обычно используют let и const.

const — если переменную не нужно переназначать:

\`\`\`js
const name = 'Anton';
\`\`\`

let — если значение будет меняться:

\`\`\`js
let count = 0;
count++;
count++;
console.log(count);
// Выведет: 2
\`\`\`

var в современном коде обычно не используют, потому что у него функциональная область видимости и есть особенности с повторным объявлением и hoisting.

Коротко:

var
- функциональная область видимости
- можно переназначить
- можно повторно объявить
- до объявления даёт undefined

let
- блочная область видимости
- можно переназначить
- нельзя повторно объявить в той же области
- до объявления находится в TDZ

const
- блочная область видимости
- нельзя переназначить
- нельзя повторно объявить в той же области
- до объявления находится в TDZ
- объект или массив, объявленный через const, можно изменять`,
  1,
);
