import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import 'should';
import hljs from 'highlight.js/lib/core';
import rgc from '../dist/rgc.es.js';

hljs.registerLanguage('rgc', rgc);

const here = path.dirname(fileURLToPath(import.meta.url));
const expects = globSync(path.join(here, 'markup/rgc/*.expect.txt'));

describe('rgc', () => {
  expects.forEach((filename) => {
    const name = path.basename(filename, '.expect.txt');
    const skipped = name.endsWith('.skip');
    const run = skipped ? it.skip : it;
    run(`should markup ${name}`, () => {
      const source = fs.readFileSync(filename.replace(/\.expect/, ''), 'utf8');
      const expected = fs.readFileSync(filename, 'utf8');
      hljs.highlight(source, { language: 'rgc' }).value.trim()
        .should.equal(expected.trim());
    });
  });
});
