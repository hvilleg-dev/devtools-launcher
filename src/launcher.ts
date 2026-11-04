import chalk from 'chalk';

export interface Tool {
  name: string;
  description: string;
  command: string;
  port?: number;
}

export class DevToolsLauncher {
  private tools: Map<string, Tool> = new Map();

  constructor() {
    this.registerDefaultTools();
  }

  private registerDefaultTools(): void {
    this.tools.set('vscode', {
      name: 'vscode',
      description: 'Visual Studio Code',
      command: 'code',
      port: 3000,
    });

    this.tools.set('devserver', {
      name: 'devserver',
      description: 'Local development server (Node.js)',
      command: 'npm run dev',
      port: 3001,
    });

    this.tools.set('debug', {
      name: 'debug',
      description: 'Node.js debugger with Chrome DevTools',
      command: 'node --inspect',
      port: 9229,
    });
  }

  listTools(): Tool[] {
    return Array.from(this.tools.values());
  }

  async run(toolName: string, options: any): Promise<void> {
    const tool = this.tools.get(toolName);
    if (!tool) {
      throw new Error(`Tool "${toolName}" not found`);
    }

    console.log(chalk.green(`✓ Started ${tool.name} on port ${tool.port || 'default'}`));

    if (options.watch) {
      console.log(chalk.yellow('👁️  File watching enabled'));
    }
  }

  inspectSocket(port: number): void {
    console.log(chalk.green(`✓ Monitoring connections on port ${port}`));
    console.log(chalk.gray('Press Ctrl+C to stop\n'));
  }
}
