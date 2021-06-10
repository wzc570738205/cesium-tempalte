import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';//为打包后的文件提供传统浏览器兼容性支持
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig({
  server:{
   
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\/@ts\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
      // ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
    ]
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
