import { q } from "../helpers";

export const react4 = q(
  "react-4",
  "react",
  "Controlled vs uncontrolled компоненты?",
  `Controlled-компонент — это когда React полностью управляет значением input через state.

Например:

\`\`\`jsx
const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
\`\`\`

Здесь значение input хранится в state. Пользователь вводит текст → вызывается onChange → обновляется state → React передаёт новое значение обратно в input через value.

Uncontrolled-компонент — это когда текущее значение хранится внутри самого DOM-элемента, а не в React state.

Например:

\`\`\`jsx
const inputRef = useRef(null);

<input ref={inputRef} defaultValue="Anton" />
\`\`\`

React задаёт начальное значение через defaultValue, но дальше input сам управляет своим значением. Чтобы получить текущее значение, можно обратиться к DOM через ref:

\`\`\`js
console.log(inputRef.current.value);
\`\`\`

Главное отличие:

Controlled:
input → onChange → state → input

Uncontrolled:
input → DOM хранит значение → ref позволяет его получить

Controlled чаще используют, когда нужно реагировать на каждое изменение значения: делать валидацию, фильтрацию, включать/выключать кнопки и т.д.

Uncontrolled может быть удобнее для простых форм, когда не нужно хранить каждое изменение input в state.

Для controlled используют value или checked, для uncontrolled — defaultValue или defaultChecked.`,
  4,
);
