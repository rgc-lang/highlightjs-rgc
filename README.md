# highlightjs-rgc

[highlight.js](https://highlightjs.org/) grammar for the
[RGC](https://github.com/rgc-lang/rgc) programming language
(\`.rg\` files).

## Usage

### Browser (CDN)

Include the IIFE build and register the language:

```html
<script src="https://cdn.jsdelivr.net/npm/highlight.js/lib/common.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-rgc/dist/rgc.min.js"></script>
```

### Node / bundler

```bash
npm install highlightjs-rgc
```

```js
import hljs from 'highlight.js/lib/core';
import rgc from 'highlightjs-rgc';

hljs.registerLanguage('rgc', rgc);
```

## Language

Highlights RGC keywords, types, literals, built-ins, comments, strings,
numbers, operators, and borrow annotations (\`@Type\` / \`@var\`).

## License

Apache-2.0. See [LICENSE](LICENSE).
