import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


export default defineConfig({
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  },
  plugins: [reactRefresh()],
  server: {
    host: true,
  },
})

