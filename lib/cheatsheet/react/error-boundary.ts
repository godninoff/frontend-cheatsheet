import { q } from "../helpers";

export const react9 = q(
  "react-9",
  "react",
  "Error Boundary — это?",
  "Error Boundary — компонент, который перехватывает JavaScript-ошибки во время render, в lifecycle и в constructor дочернего дерева и показывает fallback UI вместо упавшего участка интерфейса. Классический Error Boundary реализуют через class component с componentDidCatch и/или getDerivedStateFromError. Ошибки в event handlers и большинстве async-кодов автоматически Error Boundary не перехватывает.",
  9,
);
