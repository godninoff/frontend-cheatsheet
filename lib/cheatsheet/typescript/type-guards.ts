import { q } from "../helpers";

export const ts9 = q(
  "ts-9",
  "typescript",
  "Type Guard в TypeScript?",
  `Type Guard — способ сузить тип значения после проверки. Встроенные варианты: typeof, instanceof и in. Также можно создавать собственные type guard-функции с type predicate, например value is string.

1. typeof — проверяет тип значения и позволяет сузить тип, чаще всего используется для примитивов:

\`\`\`ts
const value: string | number = 10;

if (typeof value === "number") {
  value.toFixed(2);
}
\`\`\`

2. instanceof — проверяет, является ли объект экземпляром определённого класса или конструктора:

\`\`\`ts
class User {}

const user = new User();

if (user instanceof User) {
  // TypeScript знает, что user — User
}
\`\`\`

3. in — проверяет наличие свойства в объекте:

\`\`\`ts
type Admin = { role: string };
type User = { name: string };

const person: Admin | User = ...;

if ("role" in person) {
  person.role;
}
\`\`\`

4. Array.isArray() — проверяет, является ли значение массивом:

\`\`\`ts
const value: string | string[] = [];

if (Array.isArray(value)) {
  value.push("hello");
}
\`\`\`

5. Проверка через сравнение значений — TypeScript тоже может сузить union:

\`\`\`ts
const value: string | null = null;

if (value !== null) {
  value.toUpperCase();
}
\`\`\`

6. Пользовательский Type Guard — функция с type predicate "value is Type":

\`\`\`ts
const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const value: unknown = "hello";

if (isString(value)) {
  value.toUpperCase();
}
\`\`\`

Главная идея: Type Guard позволяет TypeScript понять, с каким конкретно типом мы работаем внутри определённого блока кода.`,
  9,
);
