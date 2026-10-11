import { q } from "../helpers";

export const ts14 = q(
  "ts-14",
  "typescript",
  "Какие utility types знаешь?",
  `Utility types — готовые типы TypeScript, которые позволяют получать новые типы на основе существующих.

Partial — делает все свойства optional:

\`\`\`ts
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;

// { name?: string; age?: number }
\`\`\`

Required — делает все свойства обязательными:

\`\`\`ts
type User = {
  name?: string;
  age?: number;
};

type RequiredUser = Required<User>;

// { name: string; age: number }
\`\`\`

Readonly — запрещает изменять свойства:

\`\`\`ts
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "Anton",
  age: 25,
};

user.age = 26; // ошибка
\`\`\`

Pick — выбирает указанные свойства:

\`\`\`ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserPreview = Pick<User, "name" | "age">;

// { name: string; age: number }
\`\`\`

Omit — исключает указанные свойства:

\`\`\`ts
type User = {
  name: string;
  age: number;
  password: string;
};

type PublicUser = Omit<User, "password">;

// { name: string; age: number }
\`\`\`

Record — создаёт объектный тип с указанными ключами и типом значений:

\`\`\`ts
type UserRole = "admin" | "user";

type RolePermissions = Record<UserRole, string[]>;

// { admin: string[]; user: string[] }
\`\`\`

Exclude — убирает из первого union значения, которые есть во втором:

\`\`\`ts
type Status = "loading" | "success" | "error";

type FinalStatus = Exclude<Status, "loading">;

// "success" | "error"
\`\`\`

Extract — наоборот, оставляет из первого union только значения, которые есть во втором union:

\`\`\`ts
type A = "a" | "b" | "c";
type B = "b" | "c" | "d";

type Result = Extract<A, B>;

// "b" | "c"
\`\`\`

То есть Extract можно представить как поиск общих значений двух union. Exclude оставляет значения, которые есть только в первом union.

ReturnType — получает тип, который возвращает функция:

\`\`\`ts
function getUser() {
  return {
    name: "Anton",
    age: 25,
  };
}

type User = ReturnType<typeof getUser>;

// { name: string; age: number }
\`\`\`

Parameters — получает параметры функции в виде tuple:

\`\`\`ts
function createUser(name: string, age: number) {}

type UserParams = Parameters<typeof createUser>;

// [name: string, age: number]
\`\`\`

Awaited — получает тип значения, которое будет получено после await у Promise:

\`\`\`ts
type Result = Awaited<Promise<string>>;

// string

type Result = Awaited<Promise<Promise<number>>>;

// number
\`\`\`

Awaited часто используют вместе с ReturnType, чтобы получить фактический тип результата async-функции:

\`\`\`ts
async function getUser() {
  return {
    name: "Anton",
    age: 25,
  };
}

type User = Awaited<ReturnType<typeof getUser>>;

// { name: string; age: number }
\`\`\``,
  14,
);
