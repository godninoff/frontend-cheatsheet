import { q } from "../helpers";

export const ts3 = q(
  "ts-3",
  "typescript",
  "Что такое type/interface? В чём разница?",
  `И type, и interface позволяют описывать типы в TypeScript. Чаще всего оба используют для описания объектов.

Interface:

\`\`\`ts
interface User {
  name: string;
  age: number;
}
\`\`\`

Type:

\`\`\`ts
type User = {
  name: string;
  age: number;
};
\`\`\`

В простом описании объекта они работают практически одинаково.

Главные отличия:

1. Interface можно расширять через extends:

\`\`\`ts
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
\`\`\`

Для type похожий результат можно получить через &:

\`\`\`ts
type User = {
  name: string;
};

type Admin = User & {
  permissions: string[];
};
\`\`\`

2. Type можно использовать не только для объектов. Например, можно описать примитив:

\`\`\`ts
type ID = string;
type Age = number;
\`\`\`

Interface для примитива использовать нельзя. Interface предназначен для описания структуры объекта.

3. Type удобно использовать для нескольких вариантов типа:

\`\`\`ts
type Status = "loading" | "success" | "error";
\`\`\`

Interface такое объединение напрямую описать не может.

4. Type можно комбинировать с помощью & и |:

\`\`\`ts
type A = { name: string };
type B = { age: number };

type User = A & B;
type Result = string | number;
\`\`\`

Interface чаще используют, когда нужно описать структуру объекта и затем расширять её через extends. Type более универсален и позволяет описывать как объекты, так и примитивы, объединения и другие составные типы.`,
  3,
);
