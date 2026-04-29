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
        ...globals.jquery,
        ScrollHint: 'readonly', // 外部ライブラリのグローバル変数を追加
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'no-unused-vars': [
        // 未使用変数の警告ルール
        'warn',
        {
          argsIgnorePattern: '^_', // 引数名が_で始まる場合は未使用でも警告しない
          caughtErrorsIgnorePattern: '^_', // catchのエラー変数が_で始まる場合は未使用でも警告しない
          destructuredArrayIgnorePattern: '^_', // 配列の分割代入で変数名が_で始まる場合は未使用でも警告しない
        },
      ],
      'no-console': 'off', // console.logの使用を許可（開発時のデバッグ用）
      eqeqeq: 'error', // == を禁止し、=== のみ許可（型の暗黙変換によるバグ防止）
      'no-var': 'error', // varの使用を禁止（let / constを強制）
      'prefer-const': 'warn', // 再代入しない変数はconstを使うよう促す
      'prettier/prettier': 'error', // Prettierのフォーマット違反をエラーとして検出
    },
    'no-undef': 'off', // 未定義変数の参照チェックを無効化（jQuery などの外部グローバルのため）
  },
];
