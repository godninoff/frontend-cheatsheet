import { q } from "../helpers";

export const react12 = q(
  "react-12",
  "react",
  "Что такое батчинг? В какой версии React он появился?",
  "Batching — объединение нескольких обновлений состояния в одну обработку render, чтобы не выполнять несколько render подряд. Batching существовал и раньше, например внутри React event handlers. В React 18 появился automatic batching для более широкого набора асинхронных контекстов, включая Promise и setTimeout.",
  12,
);
