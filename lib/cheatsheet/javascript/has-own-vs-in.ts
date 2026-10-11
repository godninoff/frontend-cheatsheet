import { q } from "../helpers";

export const js23 = q(
  "js-23",
  "js",
  "hasOwnProperty vs in?",
  `Оператор in проверяет наличие свойства не только у самого объекта, но и в его prototype chain. Object.prototype.hasOwnProperty() проверяет только собственные свойства объекта. Для современного кода также есть Object.hasOwn(obj, key).`,
  23,
);
