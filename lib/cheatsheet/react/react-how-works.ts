import { q } from "../helpers";

export const react2 = q(
  "react-2",
  "react",
  "Как работает React?",
  "Компонент возвращает описание UI через JSX. При изменении state или props React запускает render, получает новое дерево элементов и сравнивает его с предыдущим. Этот процесс называется reconciliation. После этого React применяет необходимые изменения к DOM на commit-фазе.",
  2,
);
