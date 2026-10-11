import { q } from "../helpers";

export const js16 = q(
  "js-16",
  "js",
  "Метод stopPropagation?",
  `event.stopPropagation() останавливает дальнейшее распространение события по DOM-дереву между фазами capture и bubble. Он не отменяет стандартное действие браузера. Для остановки других обработчиков на том же элементе есть stopImmediatePropagation().`,
  16,
);
