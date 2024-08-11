import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'W98PlugNPlay',
      fileName: 'w98-plug-n-play', // This will produce 'bundle.js'
    },
    rollupOptions: {
      external: [
        '@astrox/sdk-web',
        '@astrox/sdk-webview',
        '@fort-major/msq-client',
        '@fort-major/msq-shared'
      ],
      output: {
        globals: {
          '@astrox/sdk-web': 'astrox.sdkWeb',
          '@astrox/sdk-webview': 'astrox.sdkWebview',
          '@fort-major/msq-client': 'fortMajor.msqClient',
          '@fort-major/msq-shared': 'fortMajor.msqShared'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'node:buffer': 'buffer',
    },
  },
});
