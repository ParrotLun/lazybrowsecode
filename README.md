<div align="center">

# 🗂️ lazybrowsecode

Too lazy to install VSCode or any other IDE? Good — your browser is already open.

A **zero-dependency, single-file** local code browser.  
No npm. No server. No install. No internet required.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![Works Offline](https://img.shields.io/badge/works-offline-orange)
![Single File](https://img.shields.io/badge/delivery-single%20HTML%20file-purple)

**[English](#english) · [zh-TW](#zh-tw)**

</div>

---

<a name="english"></a>
## English

### Overview

`lazybrowsecode` is a fully client-side code browser that lives in a single `index.html`.  
Select a local folder, explore the file tree, and read code with **VSCode-style syntax highlighting** — entirely in your browser, with no build step, no server, and no network dependency.

Two standalone variants are provided:

| Variant | Folder | Description |
|---|---|---|
| **Code Viewer** | [`code-viewer/`](code-viewer/) | File tree + syntax-highlighted code preview |
| **Git Viewer** | [`git-viewer/`](git-viewer/) | Everything above + Git commit history panel |

---

### Features

#### Both variants
- 📂 **Folder picker** via `<input webkitdirectory>` — no File System Access API needed
- 🌲 **Lazy file tree** — child nodes render on click, handles 5 000+ files without freezing
- 🚫 **Auto-skips noise** — `node_modules`, `.git`, `dist`, `build`, `__pycache__`, `.venv`, `.idea`, `.vscode`, `target`, `.cache`
- 🎨 **Syntax highlighting** — zero external dependencies, built-in tokeniser
- 🔢 **Line numbers** — fixed-width gutter, monospace font
- 🖼️ **Rich preview** — images, PDF, video, audio, text/code, 2 MB truncation guard
- 💾 **Memory-safe** — `URL.revokeObjectURL` called on every file switch
- 🎨 **VSCode Dark+ theme** — exact colour tokens from the official theme

#### Git Viewer only
- 📋 **Git History panel** — parses `.git/logs/HEAD` and `refs/heads/*` directly (no CLI)
- 🔀 **Separate `.git` picker** — works around browsers hiding dot-folders in directory input
- 🕐 **Relative timestamps** — "3 hours ago" with full datetime tooltip
- 🌿 **Branch badges** — commits from `refs/heads/*` show their branch name

---

### Syntax Highlighting

| Category | Languages |
|---|---|
| **JS / Web** | JavaScript, TypeScript, JSX, TSX, HTML, CSS, SCSS, JSON, YAML, TOML, Markdown, GraphQL |
| **Systems** | C, C++, C#, Go, Rust, Swift |
| **JVM / Mobile** | Java, Kotlin, Scala, Dart |
| **Scripting** | Python, Ruby, PHP, Lua, R, Shell/Bash, Elixir |
| **Data / Ops** | SQL, YAML, TOML, HCL/Terraform, Dockerfile |

Files larger than **400 KB** fall back to plain text to avoid UI jank.

#### Colour Tokens (VSCode Dark+)

| Token | Colour | Used for |
|---|---|---|
| `#569cd6` | Blue | Keywords |
| `#ce9178` | Orange | Strings |
| `#6a9955` | Green | Comments |
| `#b5cea8` | Light green | Numbers |
| `#dcdcaa` | Yellow | Function calls |
| `#4ec9b0` | Teal | Types / Classes |
| `#9cdcfe` | Light blue | Properties / Keys |
| `#c586c0` | Purple | Decorators / Directives |

---

### Getting Started

1. **Clone or download** this repository
   ```bash
   git clone https://github.com/<your-username>/lazybrowsecode.git
   ```

2. **Open a viewer** — double-click the HTML file or drag it into your browser
   ```
   code-viewer/index.html   ← file browser + syntax highlighting
   git-viewer/index.html    ← above + git commit history
   ```

3. **Select a folder** — click **"Select Project Folder"** in the toolbar
   *(For git history: also click **"Select .git Folder"** and pick the `.git` directory inside your project)*

That's it. No install, no build, no network.

---

### Repository Structure

```
lazybrowsecode/
├── README.md
├── LICENSE
├── code-viewer/
│   └── index.html        ← standalone: file browser + syntax highlighting
└── git-viewer/
    └── index.html        ← standalone: file browser + git history
```

Each `index.html` is **100% self-contained** — all CSS and JavaScript are inlined.  
Copy a single file anywhere and it works.

---

### Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 86+ | Full support |
| Firefox | 50+ | Full support |
| Safari | 11.1+ | Full support |

Requires `webkitdirectory` and `File.text()` support.

---

### Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | None | Zero dependencies |
| Styling | Inline CSS | Self-contained |
| Highlighting | Custom tokeniser | No CDN, no Prism.js / highlight.js |
| File access | `<input webkitdirectory>` | Broad browser support, no permissions prompt |
| Git parsing | Plain-text regex | No isomorphic-git, no CLI |

---

### License

[MIT](LICENSE) © 2025

---
---

<a name="zh-tw"></a>
## zh-TW

### 概覽

懶得裝 VSCode 或其他 IDE？沒關係 — 瀏覽器已經開著了。

`lazybrowsecode` 是完全在瀏覽器端執行的程式碼瀏覽器，整個應用只有一個 `index.html`。  
選擇本機資料夾，探索檔案樹，閱讀帶有 **VSCode 風格語法高亮**的程式碼 — 不需要打包、不需要伺服器、不需要網路。

提供兩個獨立可執行的版本：

| 版本 | 資料夾 | 說明 |
|---|---|---|
| **程式碼瀏覽器** | [`code-viewer/`](code-viewer/) | 檔案樹 + 語法高亮程式碼預覽 |
| **Git 瀏覽器** | [`git-viewer/`](git-viewer/) | 上述功能 + Git commit 歷史面板 |

---

### 功能特色

#### 兩個版本共有
- 📂 **資料夾選擇** — 使用 `<input webkitdirectory>`，不需要 File System Access API
- 🌲 **懶載入檔案樹** — 點擊才展開子節點，5000+ 個檔案不卡頓
- 🚫 **自動略過雜訊目錄** — `node_modules`、`.git`、`dist`、`build`、`__pycache__`、`.venv`、`.idea`、`.vscode`、`target`、`.cache`
- 🎨 **語法高亮** — 零外部依賴，內建 tokeniser
- 🔢 **行號顯示** — 固定寬度欄位，等寬字型
- 🖼️ **豐富預覽** — 圖片、PDF、影片、音訊、文字/程式碼（2 MB 截斷保護）
- 💾 **記憶體安全** — 每次切換檔案自動呼叫 `URL.revokeObjectURL`
- 🎨 **VSCode Dark+ 主題** — 使用官方主題的精確色彩

#### 僅 Git 瀏覽器
- 📋 **Git History 面板** — 直接解析 `.git/logs/HEAD` 與 `refs/heads/*`（不呼叫 CLI）
- 🔀 **獨立 .git 選擇器** — 解決瀏覽器在目錄選擇器中隱藏點開頭資料夾的問題
- 🕐 **相對時間** — 顯示「3 小時前」，懸停顯示完整日期時間
- 🌿 **分支標籤** — 來自 `refs/heads/*` 的 commit 顯示分支名稱

---

### 語法高亮語言支援

| 類別 | 語言 |
|---|---|
| **JS / Web** | JavaScript、TypeScript、JSX、TSX、HTML、CSS、SCSS、JSON、YAML、TOML、Markdown、GraphQL |
| **系統語言** | C、C++、C#、Go、Rust、Swift |
| **JVM / 行動** | Java、Kotlin、Scala、Dart |
| **腳本語言** | Python、Ruby、PHP、Lua、R、Shell/Bash、Elixir |
| **資料 / 維運** | SQL、YAML、TOML、HCL/Terraform、Dockerfile |

超過 **400 KB** 的檔案自動退回純文字顯示，避免 UI 卡頓。

#### 配色（VSCode Dark+）

| 色碼 | 顏色 | 用途 |
|---|---|---|
| `#569cd6` | 藍色 | 關鍵字 |
| `#ce9178` | 橙色 | 字串 |
| `#6a9955` | 綠色 | 註解 |
| `#b5cea8` | 淺綠色 | 數字 |
| `#dcdcaa` | 黃色 | 函式呼叫 |
| `#4ec9b0` | 青色 | 型別 / 類別 |
| `#9cdcfe` | 淺藍色 | 屬性 / 鍵值 |
| `#c586c0` | 紫色 | 裝飾器 / 前置指令 |

---

### 快速開始

1. **Clone 或下載**此專案
   ```bash
   git clone https://github.com/<your-username>/lazybrowsecode.git
   ```

2. **開啟瀏覽器** — 雙擊 HTML 檔案或拖入瀏覽器
   ```
   code-viewer/index.html   ← 檔案瀏覽器 + 語法高亮
   git-viewer/index.html    ← 上述功能 + git commit 歷史
   ```

3. **選擇資料夾** — 點擊工具列的「選擇專案資料夾」  
   *（若要看 Git 紀錄：另外點擊「選擇 .git 資料夾」，選取專案內的 `.git` 目錄）*

完成。不需要安裝、不需要打包、不需要網路。

---

### 專案結構

```
lazybrowsecode/
├── README.md
├── LICENSE
├── code-viewer/
│   └── index.html        ← 獨立執行：檔案瀏覽器 + 語法高亮
└── git-viewer/
    └── index.html        ← 獨立執行：檔案瀏覽器 + Git 歷史
```

每個 `index.html` **完全自包含** — 所有 CSS 與 JavaScript 均已內嵌。  
可以將單一檔案複製到任何地方直接使用。

---

### 瀏覽器相容性

| 瀏覽器 | 版本 | 備註 |
|---|---|---|
| Chrome / Edge | 86+ | 完整支援 |
| Firefox | 50+ | 完整支援 |
| Safari | 11.1+ | 完整支援 |

需要支援 `webkitdirectory` 與 `File.text()`。

---

### 技術棧

| 層面 | 選擇 | 原因 |
|---|---|---|
| 框架 | 無 | 零依賴 |
| 樣式 | 內嵌 CSS | 自包含 |
| 語法高亮 | 自製 tokeniser | 無 CDN，不使用 Prism.js / highlight.js |
| 檔案存取 | `<input webkitdirectory>` | 廣泛瀏覽器支援，無需授權提示 |
| Git 解析 | 純文字正則表達式 | 不使用 isomorphic-git 或 CLI |

---

### 授權

[MIT](LICENSE) © 2025
