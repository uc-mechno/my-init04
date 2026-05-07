# GEMINI.md - プロジェクトコンテキスト

## プロジェクト概要
このプロジェクトは、**ESM (ECMAScript Modules)** と最新のコード品質ツールで構成されたシンプルな JavaScript スターターキットです。自動化されたリンティングとフォーマット機能を備え、ウェブベースのアプリケーションを構築するための基礎的な構造を提供します。

- **主要技術:** JavaScript (Node.js/ESM), ESLint v10 (Flat Config), Prettier v3.
- **アーキテクチャ:** アプリケーションのソースコード用に専用の `project/` ディレクトリを持つフラットな構造。

## ディレクトリ構造
- `project/`: メインアプリケーションのソースコード。
    - `index.html`: ウェブアプリケーションのエントリポイント（現在は空）。
    - `main.js`: 主要な JavaScript ロジック。
- `eslint.config.js`: ESLint (Flat Config) ルール。
- `package.json`: プロジェクトのメタデータ、依存関係、およびスクリプト。
- `AGENTS.md`: リポジトリ固有のガイドラインと規約。

## ビルドと実行
このプロジェクトにはまだビルドステップ（webpack、vite など）はありません。コマンドは依存関係の管理とコード品質に重点を置いています。

### コマンド
- **依存関係のインストール:**
  ```bash
  npm install
  ```
- **リンティング:**
  ```bash
  npm run lint       # ESLint チェックの実行
  npm run lint:fix   # 自動修正可能な lint エラーの修正
  ```
- **フォーマット:**
  ```bash
  npm run format       # Prettier によるフォーマットの適用
  npm run format:check # フォーマット状態の確認
  ```

## 開発規約

### コーディング標準
- **モジュール:** `package.json` の `"type": "module"` で定義されている通り、常に ESM (`import`/`export`) を使用してください。
- **インデント:** 2 スペース (`.editorconfig` と `.prettierrc` で定義)。
- **引用符:** 文字列にはシングルクォートを使用してください。
- **セミコロン:** 常にセミコロンを使用してください。
- **変数:**
  - 再代入されない変数には `const` を優先してください。
  - 再代入される変数には `let` を使用してください。
  - **禁止:** `var` は絶対に使用しないでください。
- **等価性:** 常に厳密な等価性 (`===` および `!==`) を使用してください。
- **命名規則:**
  - 変数と関数には `camelCase`。
  - クラスには `PascalCase`。
  - ファイル名は小文字。

### ツールの設定
- **ESLint:** 未使用の変数（`_` で始まるものを除く）に対して警告を出し、`var` を禁止し、Prettier のフォーマットを強制するように設定されています。
- **Prettier:** 末尾のカンマを `es5` に、プリント幅を 100 文字に設定されています。

### コミットガイドライン
すべてのコミットメッセージ（例: `feat:`, `fix:`, `chore:`, `docs:`）で [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) に従ってください。

## テスト
現在、テストフレームワークは統合されていません。追加する場合は、以下の慣例に従ってください。
- `project/__tests__/*.test.js`
- `project/**/*.spec.js`
