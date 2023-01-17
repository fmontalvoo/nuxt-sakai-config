// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    app: {
        head: {
            title: 'UPS',
            meta: [
                { lang: 'es' },
                { charset: 'utf-8' },
                { hid: 'description', name: 'description', content: 'UPS' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ]
        }
    },
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        '~/assets/styles/layout.scss',
        // '~/assets/demo/flags/flags.css'
    ],
    build: {
        transpile: ['primevue']
    },
})
