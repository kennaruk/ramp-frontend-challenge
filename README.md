# Ramp Frontend Challenge

Please visit `src/App.tsx` for the main application logic and the rendered web UI.

Bonus: Add as a comment the script you used to to get the URL in step 2
```js
const refs = document.querySelectorAll(
  'section[data-id^="92"] article[data-class$="45"] div[data-tag*="78"] b.ref'
);

const result = Array.from(refs)
  .map(el => el.getAttribute("value"))
  .join("");
```