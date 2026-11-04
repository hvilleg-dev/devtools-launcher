# 🏗️ Architecture — devtools-launcher

## System Overview

```mermaid
graph TD
    A["CLI Entry Point<br/>commander.js"] -->|parses| B["Command Router"]
    B -->|list| C["Tool Registry"]
    B -->|run| D["Tool Launcher"]
    B -->|inspect| E["Socket Inspector"]
    
    D -->|spawns| F["Child Process<br/>Process Manager"]
    F -->|monitors| G["File Watcher"]
    G -->|triggers| F
    
    E -->|monitors| H["Network Sockets<br/>Debug Mode"]
    
    style A fill:#4CAF50,color:#fff
    style D fill:#2196F3,color:#fff
    style E fill:#FF9800,color:#fff
    style C fill:#9C27B0,color:#fff
```

## Core Components

### 1. **CLI Entry Point** (`cli.ts`)
- Uses `commander.js` for argument parsing
- Routes commands to appropriate handlers
- Provides user-friendly output with `chalk` colors

### 2. **Tool Registry** (`launcher.ts` → `registerDefaultTools()`)
- In-memory Map of registered tools
- Each tool: `name`, `description`, `command`, optional `port`
- Extensible for custom tool registration

### 3. **Tool Launcher** (`launcher.ts` → `run()`)
- Spawns child processes for registered tools
- Optional `--watch` flag enables file watching
- Supports custom port configuration

### 4. **Socket Inspector** (`launcher.ts` → `inspectSocket()`)
- Monitors open connections on specified port
- Useful for debugging active dev servers
- Cross-platform socket inspection

## Data Flow

```mermaid
sequenceDiagram
    actor User
    participant CLI
    participant Registry
    participant Launcher
    participant Tool

    User->>CLI: devtools-launcher run devserver --watch
    CLI->>Registry: lookupTool('devserver')
    Registry-->>CLI: Tool object
    CLI->>Launcher: run(tool, {watch: true})
    Launcher->>Tool: spawn(command)
    activate Tool
    Tool-->>Launcher: Process PID
    Launcher->>Launcher: enableFileWatcher()
    Tool-->>Launcher: stdout/stderr streams
    deactivate Tool
```

## Type System

```typescript
// Core types
interface Tool {
  name: string;
  description: string;
  command: string;
  port?: number;
}

interface LaunchOptions {
  port?: number;
  watch?: boolean;
}
```

## Testing Strategy

- **Unit Tests:** Tool registry, launch logic, socket inspection
- **Integration Tests:** CLI commands with real spawning
- **Coverage Target:** 80%+ statements/branches/lines

## Deployment & Distribution

- Built for **npm**: `npm install -g devtools-launcher`
- Binary entry point via `package.json` bin field
- TypeScript compiled to CommonJS (`dist/`)
- Source maps for debugging

## Future Enhancements

- [ ] Configuration file support (`.devtools.yml`)
- [ ] Custom plugin loader
- [ ] Shell integration (bash/zsh completion)
- [ ] GUI dashboard for tool management
