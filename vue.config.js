import { defineConfig } from '@vue/cli-service'
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
export default defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    devServer: {
      proxy: 'https://alchemon.net',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
})
