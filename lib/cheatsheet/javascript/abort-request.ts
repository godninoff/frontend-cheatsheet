import { q } from "../helpers";

export const js25 = q(
  "js-25",
  "js",
  "Как отменить запрос?",
  `Для fetch обычно используют AbortController: создают controller, передают signal в fetch и вызывают controller.abort(), когда запрос нужно отменить. Это особенно полезно в React cleanup или при смене поискового запроса.`,
  25,
);
