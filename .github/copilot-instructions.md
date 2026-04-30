# Copilot Instructions

## プロジェクト概要

JavaScript 開発環境のテンプレートプロジェクトです。ESLint と Prettier を使ったコード品質管理の設定が含まれています。

## 技術スタック

- **言語**: JavaScript（ESM 形式、`"type": "module"`）
- **リンター**: ESLint v10（Flat Config）
- **フォーマッター**: Prettier


## ファイル・ディレクトリ構成

```
eslint.config.js     # ESLint 設定（ルートに置く）
package.json         # npm スクリプト・依存関係
project/
  main.js            # メインスクリプト（全機能を関数単位で実装）
  index.html         # エントリーポイント HTML
```

## コーディング規約

### 変数宣言
- `var` は使用しない。`let` または `const` を使用すること
- 再代入しない変数は必ず `const` を使用すること

### 比較演算子
- 等値比較は `===` / `!==` を使用し、`==` / `!=` は使用しない

### 未使用変数
- 未使用変数は残さないこと
- `_` で始まる変数名は「意図的に未使用」を示す（引数・catch 変数・配列分割代入で使用可）

  ```js
  // OK
  function handler(_event) { ... }
  try { ... } catch (_e) { ... }
  const [_first, second] = arr;
  ```

### コードスタイル

- フォーマットは Prettier に従うこと（`npm run format`）
- `console.log` は開発・デバッグ用途で許可（本番コードでは不要なものは削除すること）

### 外部ライブラリのグローバル変数
CDN 読み込みの外部ライブラリは `eslint.config.js` の `globals` に登録すること。

```js
// eslint.config.js の languageOptions.globals に追記
ScrollHint: 'readonly',
Fancybox: 'readonly',
```

## ESLint ルール概要

| ルール | 設定 | 意味 |
|---|---|---|
| `no-unused-vars` | `warn` | 未使用変数を警告。`_` 始まりは除外 |
| `no-var` | `error` | `var` を禁止 |
| `prefer-const` | `warn` | 再代入しない変数に `const` を推奨 |
| `no-console` | `off` | `console.log` を許可 |
| `prettier/prettier` | `error` | Prettier フォーマット違反をエラー検出 |

## npm スクリプト

| コマンド | 内容 |
|---|---|
| `npm run lint` | ESLint でエラーチェック |
| `npm run lint:fix` | ESLint で自動修正 |
| `npm run format` | Prettier で全ファイルを整形 |
| `npm run format:check` | Prettier フォーマットの確認のみ |

## コード生成時の注意

- JavaScript は ESM 形式（`import` / `export`）で記述すること
- コード変更後は `npm run lint` でエラーがないことを確認すること
- フォーマットは `npm run format` で統一すること
