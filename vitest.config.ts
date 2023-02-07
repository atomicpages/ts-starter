import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['junit', 'default'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reportsDirectory: path.resolve(__dirname, 'coverage'),
      reporter: ['text', 'text-summary', 'lcov', 'cobertura', 'html'],
    },
  },
});
