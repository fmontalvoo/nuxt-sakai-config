// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    app:{
        head: {
            title: 'UPS',
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
