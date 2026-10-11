import { q } from "../helpers";

export const js20 = q(
  "js-20",
  "js",
  "Как скопировать объекты в JS?",
  `Для поверхностной копии объекта обычно используют spread или Object.assign():

\`\`\`js
const copy1 = { ...obj };
const copy2 = Object.assign({}, obj);
\`\`\`

Это создаёт новый объект, но вложенные объекты не копируются:

\`\`\`js
const obj = {
  name: 'Anton',
  address: {
    city: 'Perm',
  },
};

const copy = { ...obj };
copy.address.city = 'Москва';
console.log(obj.address.city); // 'Москва'
\`\`\`

То есть верхний объект новый, а вложенный address остался той же ссылкой.

Для глубокой копии можно использовать structuredClone():

\`\`\`js
const copy = structuredClone(obj);
\`\`\`

structuredClone() — встроенная функция JavaScript, доступная в современных браузерах и Node.js. Она рекурсивно копирует объект вместе с вложенными объектами, поэтому ссылки на вложенные объекты не сохраняются.

structuredClone() обычно предпочтительнее JSON.parse(JSON.stringify()), потому что JSON-способ сначала превращает объект в JSON-строку, а затем создаёт объект обратно. При этом часть типов и значений теряется или изменяется.

Например:

\`\`\`js
const obj = {
  date: new Date(),
  map: new Map([['name', 'Anton']]),
  value: undefined,
};

const copy = structuredClone(obj);

copy.date instanceof Date; // true
copy.map instanceof Map; // true
copy.value; // undefined
\`\`\`

При JSON-копировании это поведение будет другим: Date превратится в строку, Map потеряется, а undefined-свойство будет удалено.

Поэтому:
- spread / Object.assign — поверхностная копия
- structuredClone() — глубокая копия для поддерживаемых типов
- JSON.parse(JSON.stringify()) — старый ограниченный способ, который стоит использовать только когда точно известна структура данных

Важно: structuredClone() не копирует функции и некоторые другие специальные объекты.`,
  20,
);
