#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { DevToolsLauncher } from './launcher';

const launcher = new DevToolsLauncher();

program
  .name('devtools-launcher')
  .description('Lightning-fast dev tools launcher with live reload & socket inspection')
  .version('1.0.0');

program
  .command('list')
  .description('List all available development tools')
  .action(() => {
    console.log(chalk.cyan.bold('\n🛠️  Available Development Tools:\n'));
    launcher.listTools().forEach((tool) => {
      console.log(chalk.green(`  ✓ ${tool.name}`));
      console.log(chalk.gray(`    ${tool.description}`));
    });
    console.log();
  });

program
  .command('run <toolName>')
  .description('Launch a development tool with hot-reload')
  .option('--port <port>', 'Custom port for tool')
  .option('--watch', 'Enable file watching')
  .action(async (toolName: string, options) => {
    try {
      console.log(chalk.cyan(`\n🚀 Launching ${chalk.bold(toolName)}...\n`));
      await launcher.run(toolName, options);
    } catch (error) {
      console.error(chalk.red(`❌ Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

program
  .command('inspect <port>')
  .description('Inspect socket connections on specified port')
  .action((port: string) => {
    console.log(chalk.cyan(`\n🔍 Inspecting port ${port}...\n`));
    launcher.inspectSocket(parseInt(port));
  });

program.parse();
