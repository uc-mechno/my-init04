# my-init04

JavaScript 開発環境のテンプレートプロジェクトです。ESLint と Prettier を使ったコード品質管理の設定が含まれています。

## 技術スタック

- **言語**: JavaScript (ESM)
- **Linter**: ESLint v10
- **Formatter**: Prettier v3

## プロジェクト構成

```
my-init04/
├── project/
│   ├── index.html   # メイン HTML ファイル
│   └── main.js      # メイン JavaScript ファイル
├── eslint.config.js # ESLint 設定
├── package.json
└── README.md
```

## セットアップ

```bash
npm install
```

## 使用可能なスクリプト

| コマンド | 説明 |
|---|---|
| `npm run format` | コードを自動フォーマット |
| `npm run format:check` | フォーマットのチェックのみ（書き換えなし） |
| `npm run lint` | ESLint によるコードチェック |
| `npm run lint:fix` | ESLint による自動修正 |

## ESLint ルール

- `no-unused-vars`: 未使用変数を警告（`_` で始まる引数は除外）
- `no-console`: `console.log` の使用を許可
- `eqeqeq`: `===` のみ使用を強制（`==` 禁止）
- `no-var`: `var` の使用を禁止（`let` / `const` を使用）
- `prefer-const`: 再代入しない変数は `const` を推奨
- `prettier/prettier`: Prettier フォーマット違反をエラーとして検出
