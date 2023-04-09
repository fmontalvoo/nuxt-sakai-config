<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
    title: t('app.menu.label.about'),
})
</script>

<template>
    <h2>{{ $t('app.menu.label.about') }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat sunt tempora corrupti ipsam,
        delectus illo perferendis repellat mollitia quas. Animi, libero necessitatibus nulla labore recusandae
        beatae inventore quas fugit.</p>
</template>