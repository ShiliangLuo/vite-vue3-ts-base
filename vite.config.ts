import path from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  // 向`process.env`写入环境变量
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const IS_PROD = command === 'build'

  const config: UserConfig = {
    base: IS_PROD ? '/' : '/', // 根据实际情况配置
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 配置别名，可以和`tsconfig.json`配合
      },
    },
    server: {
      host: 'localhost',
      port: 3000,
      open: false,
      proxy: {
        '/api': {
          target: 'http://localhost:8082',
          changeOrigin: false,
          rewrite: path => path.replace(/^\/api/, ''), // 重写请求地址，这样后台获取的`path`就是真正的接口地址
        },
      },
    },
  }

  if (!IS_PROD) {
    // 开发环境独有配置
  } else {
    // 生产环境独有配置
  }

  return config
})
