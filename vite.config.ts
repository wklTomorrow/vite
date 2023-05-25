import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(() => {
  return {
    plugins: [react(), basicSsl()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname),
        '@src': path.resolve(__dirname, 'src/'),
      },
    },
    server: {
      open: true,
      port: 3000,
      strictPort: true,
      https: true,
      host: `local.zhenguanyu.com`,
      proxy: {
        '^.*api': {
          target: `https://conan.zhenguanyu.com`,
          changeOrigin: true,
        },
      },
    },
  };
});
