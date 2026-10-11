import { q } from "../helpers";

export const js13 = q(
  "js-13",
  "js",
  "Что такое Set и Map?",
  `Set и Map — это встроенные структуры данных JavaScript для хранения коллекций.

1. Set

Set хранит только уникальные значения.

\`\`\`js
const numbers = new Set([1, 2, 2, 3, 3]);
console.log(numbers);
// Set(3) { 1, 2, 3 }

numbers.add(4);
console.log(numbers.has(2));
// true
numbers.delete(2);
console.log(numbers.size);
// 3
\`\`\`

Set удобно использовать, когда нужно хранить набор уникальных значений.

Например, убрать дубликаты из массива:

\`\`\`js
const numbers = [1, 2, 2, 3, 3];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// [1, 2, 3]
\`\`\`

Set хранит значения, а не пары ключ-значение.

2. Map

Map хранит пары ключ → значение.

\`\`\`js
const user = new Map();
user.set('name', 'Anton');
user.set('age', 25);
console.log(user.get('name'));
// Anton
console.log(user.has('name'));
// true
user.delete('age');
console.log(user.size);
// 1
\`\`\`

Главное отличие Map от обычного объекта — ключом может быть значение любого типа.

\`\`\`js
const map = new Map();
map.set('name', 'Anton');

const user = { name: 'Anton' };
map.set(user, 'пользователь');
console.log(map.get(user));
// пользователь

const fn = () => {};
map.set(fn, 'функция');
console.log(map.get(fn));
// функция
\`\`\`

3. Важный момент со ссылками

Объекты сравниваются по ссылке.

\`\`\`js
const user1 = { name: 'Anton' };
const user2 = { name: 'Anton' };
console.log(user1 === user2);
// false
\`\`\`

То же самое относится к Set:

\`\`\`js
const set = new Set();
set.add(user1);
set.add(user2);
console.log(set.size);
// 2
\`\`\`

Если добавить одну и ту же ссылку повторно:

\`\`\`js
const user = { name: 'Anton' };
const set = new Set();
set.add(user);
set.add(user);
console.log(set.size);
// 1
\`\`\`

То же самое с Map:

\`\`\`js
const user = { name: 'Anton' };
const map = new Map();
map.set(user, 'первое значение');
map.set(user, 'второе значение');
console.log(map.size);
// 1
\`\`\`

Вторая запись перезаписала значение по тому же ключу, потому что ключ user — та же самая ссылка.

Коротко:

Set: значения → только уникальные

Map: ключ → значение

И Set, и Map можно перебирать через for...of:

\`\`\`js
const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value);
}
// 1
// 2
// 3

const map = new Map([
  ['name', 'Anton'],
  ['age', 25],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
// name Anton
// age 25
\`\`\``,
  13,
);
