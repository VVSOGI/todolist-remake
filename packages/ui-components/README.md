## Ui-components package

This package have ui components relevant by client, stories.

### How to use

1. yarn add @vvsogi/ui-components
2. Must have add this line to next.config.mjs "transpilePackages: ['@vvsogi/ui-components']" because transpile typescript in '@vvsogi/ui-components' packages
3. Must have add this line to tailwind.config.js "content: ['./node_modules/@vvsogi/ui-components/app/**/*.{js,jsx,ts,tsx}'] because add css bundle tailwind in ui-components to client tailwind css
4. use like this "import { CreateCategory } from '@vvsogi/ui-components/app'"

[Publish npm](https://www.npmjs.com/package/@vvsogi/ui-components)

It's quite large because we don't build and use it.
