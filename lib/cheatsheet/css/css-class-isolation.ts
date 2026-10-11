import { q } from "../helpers";

export const css8 = q(
  "css-8",
  "css",
  "Как сделать так, чтобы CSS-классы не пересекались?",
  `Есть несколько подходов. В React/Next.js часто используют CSS Modules и CSS-in-JS.

CSS Modules

Файл:

Button.module.css

.button {
  color: red;
}

Компонент:

import styles from './Button.module.css';

<button className={styles.button}>Кнопка</button>;

При сборке CSS Modules преобразует локальный класс в уникальное имя, например:

.button → Button_button__a1b2c

Поэтому одинаковые имена .button в разных CSS Modules не конфликтуют.

CSS-in-JS

Стили описываются прямо в JavaScript/TypeScript:

const Button = styled.button\`
  color: red;
\`;

Библиотека создаёт уникальный класс и добавляет соответствующие CSS-правила в документ:

<button class="Button-sc-a1b2c3">Кнопка</button>

Поэтому стили одного компонента не пересекаются с классами другого компонента.

БЭМ

При БЭМ уникальность достигается соглашением об именовании:

.button {}
.button__icon {}
.button--primary {}

Например, блок button имеет элементы button__icon и модификаторы button--primary.

Главная идея:

CSS Modules → локальные классы на этапе сборки.
CSS-in-JS → уникальные классы генерируются библиотекой.
БЭМ → изоляция достигается соглашением об именовании.`,
  8,
);
