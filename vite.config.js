import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PlugNPlay',
      formats: ['es', 'umd'],
      fileName: (format) => `plug-n-play.${format}.js`
    },
    rollupOptions: {
      external: [
        '@astrox/sdk-web',
        '@astrox/sdk-webview',
        '@dfinity/auth-client',
        '@dfinity/principal',
        '@dfinity/candid',
        '@dfinity/agent',
        '@dfinity/identity',
        '@fort-major/msq-client',
        '@fort-major/msq-shared'
      ],
      output: {
        globals: {
          '@astrox/sdk-web': 'astrox.sdkWeb',
          '@astrox/sdk-webview': 'astrox.sdkWebview',
          '@dfinity/auth-client': 'dfinity.authClient',
          '@dfinity/principal': 'dfinity.principal',
          '@dfinity/candid': 'dfinity.candid',
          '@dfinity/agent': 'dfinity.agent',
          '@dfinity/identity': 'dfinity.identity',
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