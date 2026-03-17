// @ts-check
import globals from 'globals';
import tseslint from 'typescript-eslint';
import baseConfig from '../../eslint.config.mjs';

export default tseslint.config(
  ...baseConfig,
  {
    ignores: ['eslint.config.mjs'],
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
