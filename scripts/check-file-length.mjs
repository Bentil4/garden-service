import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const MAX_CODE_LINES = 500;
const ROOTS = ['src', 'scripts'];
const EXTENSIONS = new Set(['.ts', '.html', '.css', '.mjs', '.js']);
// Files already over the limit may shrink but never grow: path -> current code lines.
// Spartan Helm code is generated and owned by the CLI, not hand-written.
const IGNORED_DIRS = ['src/app/shared/ui'];
const LEGACY_EXCEPTIONS = {};

function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? listFiles(path) : [path];
  });
}

function countCodeLines(path) {
  return readFileSync(path, 'utf8')
    .split('\n')
    .filter((line) => {
      const text = line.trim();
      return (
        text !== '' && !text.startsWith('//') && !text.startsWith('*') && !text.startsWith('/*')
      );
    }).length;
}

function limitFor(path) {
  return LEGACY_EXCEPTIONS[path] ?? MAX_CODE_LINES;
}

const offenders = ROOTS.flatMap(listFiles)
  .filter((path) => EXTENSIONS.has(extname(path)))
  .filter((path) => !IGNORED_DIRS.some((dir) => path.startsWith(dir)))
  .map((path) => ({ path, lines: countCodeLines(path) }))
  .filter(({ path, lines }) => lines > limitFor(path));

offenders.forEach(({ path, lines }) => console.error(`${path}: ${lines} code lines`));
process.exit(offenders.length > 0 ? 1 : 0);
