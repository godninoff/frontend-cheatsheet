import { q } from "../helpers";

export const ts11 = q(
  "ts-11",
  "typescript",
  "Что делает оператор keyof?",
  `keyof получает все ключи указанного типа и превращает их в union.

Например:

\`\`\`ts
type User = {
  name: string;
  age: number;
};

type UserKey = keyof User;

// "name" | "age"
\`\`\`

То есть keyof User означает: «какие ключи могут быть у типа User?».

keyof typeof используют, когда нужно получить ключи не типа, а конкретного объекта:

\`\`\`ts
const user = {
  name: "Anton",
  age: 25,
};

type UserKey = keyof typeof user;

// "name" | "age"
\`\`\`

Сначала typeof user получает TypeScript-тип объекта user, а затем keyof получает ключи этого типа.

keyof часто используют вместе с generic, чтобы безопасно получать значение по ключу:

\`\`\`ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Anton",
  age: 25,
};

getValue(user, "name"); // "Anton"
getValue(user, "age"); // 25
getValue(user, "email"); // ошибка TypeScript
\`\`\`

Главная идея:

- keyof Type — получить ключи типа;
- keyof typeof object — получить ключи конкретного объекта;
- K extends keyof T — ограничить generic только существующими ключами объекта.`,
  11,
);
