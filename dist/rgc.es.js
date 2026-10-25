/*! `rgc` grammar built and tested with Highlight.js 11.12.0 */

/*
Language: RGC
Author: rgc-lang <https://github.com/rgc-lang>
Description: RGC is a Python-style, compiled, statically typed programming language with ownership/borrow checking and an LLVM backend.
Website: https://github.com/rgc-lang/rgc
Category: common
*/

/** @type LanguageFn */

function rgc(hljs) {
  return {
    name: 'RGC',
    aliases: ['rgc', 'rg'],
    keywords: {
      $pattern: /[A-Za-z_][A-Za-z0-9_]*/,
      keyword: 'if elif else for in while break continue pass return match case from public def class enum interface import and or not',
      type: 'int float bool str',
      literal: 'True False None',
      built_in: 'self print range to_string args read_file write_file system len'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        scope: 'number',
        begin: /\b(0[xX][0-9a-fA-F_]+|[0-9][0-9_]*(\.[0-9][0-9_]*)?([eE][+-]?[0-9]+)?)\b/,
        relevance: 0
      },
      {
        scope: 'meta',
        begin: /@var\b|@[A-Za-z_][A-Za-z0-9_]*/,
        relevance: 0
      },
      {
        scope: 'operator',
        begin: /[+\-*\/%=<>!&|^~]+/,
        relevance: 0
      }
    ]
  };
}

export { rgc as default };
