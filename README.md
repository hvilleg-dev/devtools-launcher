# 🚀 devtools-launcher

> **Lightning-fast CLI launcher for local development tools with live reload, socket inspection, and hot-reload bridging.**

[![CI](https://github.com/hvilleg-dev/devtools-launcher/actions/workflows/ci.yml/badge.svg)](https://github.com/hvilleg-dev/devtools-launcher/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)](https://nodejs.org/)

`devtools-launcher` streamlines the launch of multiple development tools from a single CLI entry point, enabling developers to manage local environments, enable hot-reload, and inspect socket connections without context-switching.

---

## ⚡ Quick Start

Install globally:

```bash
npm install -g devtools-launcher
```

Or use directly via `npx`:

```bash
npx devtools-launcher list
npx devtools-launcher run devserver --watch
npx devtools-launcher inspect 3000
```

---

## 🎯 Key Features

- 📋 **Tool Registry:** List and discover all configured development tools
- 🎯 **Fast Launch:** Start any tool with zero-overhead invocation
- 👁️ **Socket Inspection:** Monitor open connections and live debugging sessions
- 🔄 **Hot-Reload Support:** Enable automatic file watching and reload bridges
- 🛠️ **Extensible:** Register custom tools programmatically

---

## 📖 Usage Examples

### List Available Tools

```bash
devtools-launcher list

🛠️  Available Development Tools:

  ✓ vscode
    Visual Studio Code
  ✓ devserver
    Local development server (Node.js)
  ✓ debug
    Node.js debugger with Chrome DevTools
```

### Launch with Hot-Reload

```bash
devtools-launcher run devserver --watch

🚀 Launching devserver...

✓ Started devserver on port 3001
👁️  File watching enabled
```

### Inspect Socket Connections

```bash
devtools-launcher inspect 9229

🔍 Inspecting port 9229...

✓ Monitoring connections on port 9229
Press Ctrl+C to stop
```

---

## 🏗️ Architecture

```
devtools-launcher/
├── src/
│   ├── cli.ts          # CLI entry point (Commander.js)
│   ├── launcher.ts     # Core launcher engine
│   └── index.ts        # Public API
├── tests/
│   └── launcher.test.ts
├── package.json
└── tsconfig.json
```

---

## 🧪 Testing

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

---

## 🔧 Extending devtools-launcher

```javascript
import { DevToolsLauncher } from 'devtools-launcher';

const launcher = new DevToolsLauncher();

// Programmatic tool registration
launcher.run('custom-tool', { port: 4000, watch: true });
```

---

## 📄 License

[MIT](LICENSE) © [Harold Villegas](https://github.com/hvilleg-dev)

---

**Status:** Production-ready · **Test Coverage:** 80%+ · **Last Updated:** 2026-11-03
