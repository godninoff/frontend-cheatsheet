import { q } from "../helpers";

export const browser21 = q(
  "browser-21",
  "browser",
  "Чем отличаются HTTP/1.1, HTTP/2 и HTTP/3?",
  "HTTP/1.1 использует текстовый протокол и обычно отдельные TCP-соединения или keep-alive для запросов. HTTP/2 работает поверх TCP, использует бинарные фреймы и multiplexing. HTTP/3 использует QUIC поверх UDP, уменьшая влияние проблем TCP на установление и передачу соединения.",
  21,
);
