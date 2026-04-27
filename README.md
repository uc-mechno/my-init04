

# 🧹 Code Quality Setup

このプロジェクトでは、コード品質とフォーマットを統一するために以下を使用しています：

- ESLint（コード品質チェック）
- Prettier（コード整形）


---

## 📦 セットアップ

```bash
npm install
```

---

## 🚀 使用コマンド

### ESLint

```bash
npm run lint
```

コードの問題をチェックします。

```bash
npm run lint:fix
```

自動修正できるものを修正します。

---

### Prettier

```bash
npm run format
```

全ファイルを整形します。

```bash
npm run format:check
```

整形されていないファイルをチェックします。

---

## 🧠 自動実行（重要）

現在、自動実行（lint-staged / Husky）は使用していません。

コミット時の自動チェックは行われず、手動で実行します：

- ESLint：`npm run lint`
- Prettier：`npm run format`

---

## 🔧 設定ルール（ESLint）

主なルール：

- 未使用変数 → 警告（`_`付きは無視）
- `==` 禁止 → `===` 強制
- `var` 禁止 → `let / const`
- 再代入なし → `const 推奨`
- `console.log` → 許可
- Prettier違反 → エラー

---

### ② コミットが止まる場合

👉 ESLintエラーです（仕様です）

```bash
npm run lint:fix
```

で修正してください

---

## 🧩 推奨エディタ設定（VSCode）

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
