import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
    server :{
        host : '0.0.0.0'
    }
})
