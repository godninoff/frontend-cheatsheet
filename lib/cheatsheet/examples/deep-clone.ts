import { q } from "../helpers";

export const examples2 = q(
  "examples-2",
  "examples",
  "Глубокое клонирование объекта через рекурсию",
  `\`\`\`ts
const deepClone = (obj) => {
  // Проверяем, является ли obj объектом и не равен ли он null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Создаём новый объект или массив в зависимости от типа
  const copy = Array.isArray(obj) ? [] : {};

  // Рекурсивно копируем свойства
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
};
\`\`\``,
  2,
);
