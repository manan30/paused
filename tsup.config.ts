import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  clean: true,
  dts: true,
  minify: true,
  legacyOutput: true,
  format: ['cjs', 'esm'],
  target: 'es2020',
  outDir: 'dist'
});
