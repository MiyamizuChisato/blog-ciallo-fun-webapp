// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'},
            ],
            bodyAttrs: {class: 'bg-screen'},
            script: [
                'const theme = localStorage.getItem("vueuse-color-scheme");if(theme==="dark") document.documentElement.classList.add("dark")'
            ]
        },
    },
    build: {
        transpile: [
            'vuetify',
        ],
    },
    css: [
        'assets/styles/index.css',
        'assets/styles/markdown.css',
    ],
    modules: [
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@pinia/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config?.plugins?.push(vuetify());
            });
        }
    ],
    devtools: {enabled: false},
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true
        },
        devProxy: {
            "/blog": {
                target: "http://localhost:8080/blog",
                changeOrigin: true,
                prependPath: true,
            }
        },
        routeRules: {
            '/blog/**': {
                proxy: "http://localhost:8080/blog/**",
            }
        }
    },
})
