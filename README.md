# my-init04

大学 Web サイト向けフロントエンド JavaScript プロジェクト。ESLint（Flat Config）と Prettier によるコード品質管理を導入しています。

## 技術スタック

- **言語**: JavaScript（ESM 形式、`"type": "module"`）
- **リンター**: ESLint v10（Flat Config）
- **フォーマッター**: Prettier v3

## プロジェクト構成

```
my-init04/
├── project/
│   ├── index.html       # エントリーポイント HTML
│   └── main.js          # メインスクリプト
├── eslint.config.js     # ESLint 設定
├── package.json
└── README.md
```

## セットアップ

```bash
npm install
```

## npm スクリプト

| コマンド | 説明 |
|---|---|
| `npm run lint` | ESLint でエラーチェック |
| `npm run lint:fix` | ESLint で自動修正 |
| `npm run format` | Prettier で全ファイルを整形 |
| `npm run format:check` | Prettier フォーマットの確認のみ |

## ESLint ルール

| ルール | 設定 | 意味 |
|---|---|---|
| `no-unused-vars` | `warn` | 未使用変数を警告。`_` 始まりは除外 |
| `no-var` | `error` | `var` を禁止 |
| `prefer-const` | `warn` | 再代入しない変数に `const` を推奨 |
| `no-console` | `off` | `console.log` を許可 |
| `prettier/prettier` | `error` | Prettier フォーマット違反をエラー検出 |

## コーディング規約

- 変数宣言は `let` / `const` を使用（`var` 禁止）
- 等値比較は `===` / `!==` を使用（`==` / `!=` 禁止）
- 未使用変数は残さない（`_` 始まりの引数・catch 変数は除外）
- CDN で読み込む外部ライブラリのグローバル変数は `eslint.config.js` の `globals` に登録する
