# Contributing to devtools-launcher

Thank you for your interest in contributing! Here's how you can help:

## Development Setup

```bash
git clone https://github.com/hvilleg-dev/devtools-launcher.git
cd devtools-launcher
npm install
npm run dev
```

## Making Changes

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes and add tests
3. Ensure all tests pass: `npm test`
4. Commit with conventional messages: `git commit -m "feat: add new tool type"`
5. Push and open a PR

## Testing Guidelines

- Write unit tests for all new features
- Maintain >80% code coverage
- Run `npm test -- --coverage` before submitting

## Code Style

- Use TypeScript strict mode
- Follow ESLint configuration: `npm run lint`
- Format with Prettier (configured in package.json)

## Reporting Issues

Use [GitHub Issues](https://github.com/hvilleg-dev/devtools-launcher/issues) to report bugs. Include:
- Steps to reproduce
- Expected vs. actual behavior
- Node.js version and OS

Thank you! 🚀
