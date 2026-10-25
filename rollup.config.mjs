import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const hljsVersion = require('highlight.js/package.json').version;
const banner = `/*! \`rgc\` grammar built and tested with Highlight.js ${hljsVersion} */\n`;

export default {
  input: 'src/languages/rgc.js',
  output: [
    {
      file: 'dist/rgc.es.js',
      format: 'es',
      banner
    },
    {
      file: 'dist/rgc.cjs',
      format: 'cjs',
      exports: 'default',
      banner
    },
    {
      file: 'dist/rgc.js',
      format: 'iife',
      name: 'hljsRgc',
      banner,
      footer: 'hljs.registerLanguage("rgc", hljsRgc);'
    }
  ]
};
