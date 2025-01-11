import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-component-toolkit/src': fileURLToPath(new URL('./node_modules/vue-component-toolkit/src', import.meta.url)),
            'vue-component-toolkit/dist': fileURLToPath(new URL('./node_modules/vue-component-toolkit/dist', import.meta.url)),
        },
    },
});
