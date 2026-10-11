import { q } from "../helpers";

export const css3 = q(
  "css-3",
  "css",
  "Способы отцентрировать блок?",
  "Способ зависит от задачи. Для flex: display: flex и justify-content/align-items. Для grid: place-items: center. Для обычного блока с известной шириной можно использовать margin: 0 auto для горизонтального центрирования. Абсолютно позиционированный элемент можно центрировать через top: 50%, left: 50% и transform: translate(-50%, -50%).",
  3,
);
