import { q } from "../helpers";

export const js5 = q(
  "js-5",
  "js",
  "Что такое autoboxing?",
  `Autoboxing — это автоматическое временное оборачивание примитивного значения в объект-обёртку, когда нужно обратиться к его свойству или методу.

Например:

\`\`\`js
const str = 'hello';
console.log(str.toUpperCase());
// Выведет: HELLO
\`\`\`

str — это примитив типа string, но мы можем вызвать у него метод toUpperCase().

JavaScript автоматически временно оборачивает строку в объект String:

'hello' → new String('hello')

Метод toUpperCase() находится в String.prototype. Объект String получает к нему доступ через прототипную цепочку:

'hello'
  ↓ autoboxing
new String('hello')
  ↓
String.prototype
  ↓
toUpperCase()

После выполнения метода временный объект больше не нужен.

То же самое происходит с другими примитивами:

\`\`\`js
const num = 123;
console.log(num.toString());
// Выведет: "123"
\`\`\`

Здесь число временно оборачивается в объект Number, а метод toString() берётся из Number.prototype.

Важно: это происходит автоматически, поэтому нам не нужно самостоятельно писать new String() или new Number().`,
  5,
);
