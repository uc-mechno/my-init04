# Repository Guidelines

## プロジェクト構成とモジュール構造
このリポジトリは、ESM ベースの小規模 JavaScript スターターです。

- `project/`: アプリケーション本体。
- `project/main.js`: メインスクリプトのエントリ。
- `project/index.html`: HTML エントリポイント。
- `eslint.config.js`: ESLint（Flat Config）設定。
- `.prettierrc`, `.editorconfig`: 整形・エディタ共通設定。

新しい実行コードは `project/` 配下に追加してください。規模が大きくなる場合は、`project/features/<feature-name>/` のように機能単位で整理します。

## ビルド・テスト・開発コマンド
まず依存関係をインストールします。

```bash
npm install
```

品質チェック用コマンド:

- `npm run lint`: すべての `*.js` に対して ESLint を実行。
- `npm run lint:fix`: ESLint で自動修正可能な問題を修正。
- `npm run format`: Prettier で整形を適用。
- `npm run format:check`: 整形状態のみ確認（変更なし）。

PR 作成前に `npm run lint && npm run format:check` を実行してください。

## コーディングスタイルと命名規則
- `"type": "module"` のため、ESM（`import` / `export`）を使用。
- インデントは 2 スペース、改行は LF、文字コードは UTF-8（`.editorconfig`）。
- Prettier 設定: シングルクォート、セミコロンあり、末尾カンマ（`es5`）、最大 100 文字。
- 再代入しない変数は `const`、必要時のみ `let` を使用。
- 比較は `===` / `!==` を使用し、`==` は使用しない。
- 命名は、変数・関数は `camelCase`、クラスは `PascalCase`、ファイル名は原則小文字。

## テスト方針
現時点ではテストフレームワークは未導入です。導入時は以下のいずれかの配置規則で統一してください。

- `project/__tests__/*.test.js`
- `project/**/*.spec.js`

最低限、lint と format チェックは必須です。Vitest / Jest などを追加した場合は、`npm test` スクリプトを追加し、`README.md` に追記してください。

## コミットとプルリクエストの方針
現在 `main` にコミット履歴がないため、今後は Conventional Commits を採用します。

- `feat: add header component`
- `fix: handle null input in parser`
- `chore: update eslint config`

各 PR では以下を満たしてください。
- 変更内容と目的を明確に記載する。
- 関連 Issue がある場合はリンクする（例: `Closes #123`）。
- UI 変更がある場合は Before/After のスクリーンショットを添付する。
- `npm run lint` と `npm run format:check` が通ることを確認する。
