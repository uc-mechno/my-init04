// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // 未使用の変数や引数を検出（_で始まる引数は無視）
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // console.logの使用を許可（開発時のデバッグ用）
      'no-console': 'off',
      // == を禁止し、=== のみ許可（型の暗黙変換によるバグ防止）
      eqeqeq: 'error',
      // varの使用を禁止（let / constを強制）
      'no-var': 'error',
      // 再代入しない変数はconstを使うよう促す
      'prefer-const': 'warn',
      // Prettierのフォーマット違反をエラーとして検出
      'prettier/prettier': 'error',
    },
  },
];
