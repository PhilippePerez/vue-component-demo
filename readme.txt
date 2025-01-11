In a Vite project, if you want to map multiple source directories (e.g., for Vue.js components, assets, or modules), you can achieve this by customizing the resolve options in the Vite configuration (vite.config.js or vite.config.ts).

Here's how you can map multiple source directories:

    Modify vite.config.js or vite.config.ts:

    Use the resolve.alias option to map multiple directories to specific paths. For example, you might want to alias directories like src/components or src/utils to simplify imports.

    Example Configuration:

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@utils',
        replacement: '/src/utils',
      },
      {
        find: '@assets',
        replacement: '/src/assets',
      },
    ],
  },
});

Usage in Vue Files:

With the alias configuration above, you can import files from these directories like this:

    <script>
    import MyComponent from '@components/MyComponent.vue';
    import { myUtilFunction } from '@utils/myUtil.js';
    import logo from '@assets/logo.png';
    </script>

Important Points:

    find: The alias you want to use in the import.
    replacement: The path to the actual directory you want to map to. Use absolute paths starting from the project root (e.g., /src/components).
