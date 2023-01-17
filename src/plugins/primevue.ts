import { defineNuxtPlugin } from '#app'

import PrimeVue from 'primevue/config'

// Components
import Button from 'primevue/button'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component('Button', Button);
});