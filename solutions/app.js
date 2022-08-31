
// ## 1. feladat
// - Fájl: `solutions/app.js`
// - Export: a setCookie és a cookieHandler.
// - Az előző storage modulban lévő 2 fájlt mozgasd át ide, és exportáld ki 
// a következők szerint:
//   - a setCookie default export legyen
//   - a cookieHandler egy export objektumon belül legyen
//   - az app.js-ben mind a kettőt importáld be, és exportáld ki egy közös 
// objektumban.

import setCookie from "./app1.js";
import { cookieHandler } from "./app2.js";

export { cookieHandler, setCookie };