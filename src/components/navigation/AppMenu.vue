<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppMenuItem from '../navigation/AppMenuItem.vue'

import { MenuItem } from '../../models/menu-item.model'

const { t } = useI18n()

const emit = defineEmits(['menuitem-click'])

const onMenuItemClick = (item: MenuItem) => {
  emit('menuitem-click', item)
}

const menu: MenuItem[] = [
  {
    label: t('app.menu.title'),
    items: [
      { label: t('app.menu.label.home'), icon: 'pi pi-fw pi-home', to: '/' },
      { label: t('app.menu.label.about'), icon: 'pi pi-fw pi-id-card', to: '/about' },
    ]
  },
  // {
  //   label: 'UI Components',
  //   icon: 'pi pi-fw pi-sitemap',
  //   items: [
  //     { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/about' },
  //     { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/demo/input' },
  //     { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/demo/floatlabel' },
  //     { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/demo/invalidstate' },
  //   ]
  // },
]

</script>

<template>
  <div class="layout-menu-container">
    <AppMenuItem :items="menu" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
  </div>
</template>

<style scoped></style>
