<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
    title: t('app.menu.label.home'),
})
</script>

<template>
    <div>
        <h2>{{ $t('app.menu.label.home') }}</h2>
    </div>
</template>