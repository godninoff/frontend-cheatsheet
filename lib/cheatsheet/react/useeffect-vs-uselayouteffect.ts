import { q } from "../helpers";

export const react7 = q(
  "react-7",
  "react",
  "В чём разница хуков useEffect и useLayoutEffect?",
  "useEffect запускает effect после commit и обычно после того, как браузер сможет отрисовать изменения. useLayoutEffect выполняется после обновления DOM, но до paint и блокирует paint на время своего выполнения. useLayoutEffect используют, когда нужно измерить DOM или синхронно изменить layout до того, как пользователь увидит результат.",
  7,
);
