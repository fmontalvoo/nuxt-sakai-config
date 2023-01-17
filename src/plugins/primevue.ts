import { defineNuxtPlugin } from '#app'

import PrimeVue from 'primevue/config'

// Directives
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'
import BadgeDirective from 'primevue/badgedirective'

// Components
import Badge from 'primevue/badge'
import Button from 'primevue/button'

export default defineNuxtPlugin(({ vueApp: app }) => {
    app.use(PrimeVue, { ripple: true })

    // Directives
    app.directive('ripple', Ripple)
    app.directive('tooltip', Tooltip)
    app.directive('badge', BadgeDirective)
    app.directive('styleclass', StyleClass)

    // Components
    app.component('Badge', Badge)
    app.component('Button', Button)
})