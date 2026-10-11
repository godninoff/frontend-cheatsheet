import { q } from "../helpers";

export const js2 = q(
  "js-2",
  "js",
  "Стадии события в JS ?",
  `У DOM-события есть 3 этапа распространения:

1. Погружение (capture)

Событие идёт сверху вниз:

document → html → body → родитель → target

На этом этапе событие "погружается" к элементу, на котором произошло событие.

2. Target phase

Событие дошло до самого элемента, на котором произошло действие.

3. Всплытие (bubble)

После target событие идёт обратно вверх:

target → родитель → body → html → document

По умолчанию обработчики работают на этапе всплытия.

Пример:

\`\`\`html
<div id="parent">
  <button id="button">Нажми</button>
</div>
\`\`\`

Если нажать на button:

погружение:
document → div → button

target:
button

всплытие:
button → div → document

Можно добавить обработчик на этапе погружения:

\`\`\`js
parent.addEventListener(
  'click',
  () => console.log('parent'),
  { capture: true }
);
\`\`\`

Остановить дальнейшее распространение события можно через:

\`\`\`js
event.stopPropagation();
\`\`\`

Например:

\`\`\`js
button.addEventListener('click', (event) => {
  event.stopPropagation();
});
\`\`\`

После этого событие дальше по дереву не пойдёт.

Важно: stopPropagation() останавливает распространение события, но не отменяет само действие браузера.

Например, если нажать на ссылку, stopPropagation() не отменит переход по ссылке.

Для отмены стандартного действия браузера используется:

\`\`\`js
event.preventDefault();
\`\`\``,
  2,
);
