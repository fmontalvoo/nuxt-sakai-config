import { createI18n } from 'vue-i18n'

import { es } from '@/i18n/es'

export default defineNuxtPlugin(({ vueApp: app }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'es',
        messages: {
            es: es()
        }
    })

    app.use(i18n)
})