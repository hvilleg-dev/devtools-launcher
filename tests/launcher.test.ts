import { DevToolsLauncher } from '../src/launcher';

describe('DevToolsLauncher', () => {
  let launcher: DevToolsLauncher;

  beforeEach(() => {
    launcher = new DevToolsLauncher();
  });

  test('should list available tools', () => {
    const tools = launcher.listTools();
    expect(tools.length).toBeGreaterThan(0);
    expect(tools.some(t => t.name === 'vscode')).toBe(true);
  });

  test('should run a registered tool', async () => {
    await expect(launcher.run('vscode', {})).resolves.toBeUndefined();
  });

  test('should throw error for unknown tool', async () => {
    await expect(launcher.run('unknown-tool', {})).rejects.toThrow('Tool "unknown-tool" not found');
  });

  test('should inspect socket on port', () => {
    expect(() => launcher.inspectSocket(3000)).not.toThrow();
  });
});
