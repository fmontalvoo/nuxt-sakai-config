<script setup lang="ts">
import { ref } from 'vue'

import { MenuItem } from '~/models/menu-item'

const isMenuOpen = ref<boolean>(false)
const mobileMenuActive = ref<boolean>(false)
const overlayMenuActive = ref<boolean>(false)
const staticMenuInactive = ref<boolean>(true)
const layoutMode = ref<'static' | 'overlay'>('static')

const containerClass = computed(() => ['layout-wrapper', {
  'layout-overlay': layoutMode.value === 'overlay',
  'layout-static': layoutMode.value === 'static',
  'layout-static-sidebar-inactive': staticMenuInactive.value && layoutMode.value === 'static',
  'layout-overlay-sidebar-active': overlayMenuActive.value && layoutMode.value === 'overlay',
  'layout-mobile-sidebar-active': mobileMenuActive.value,
}])

const isDesktop = () => window.innerWidth >= 992

const onMenuToggle = (event: Event) => {
  isMenuOpen.value = !isMenuOpen.value
  if (isDesktop()) {
    if (layoutMode.value === 'overlay') {
      if (mobileMenuActive.value)
        overlayMenuActive.value = true

      mobileMenuActive.value = false
      overlayMenuActive.value = !overlayMenuActive.value

    } else if (layoutMode.value === 'static') {
      staticMenuInactive.value = !staticMenuInactive.value
    }

  } else {
    mobileMenuActive.value = !mobileMenuActive.value
  }
  event.preventDefault()
}

const onMenuItemClick = (item: MenuItem) => {
  if (item && !item.items) {
    overlayMenuActive.value = false
    mobileMenuActive.value = false
  }
}

const onWrapperClick = (event: Event) => {
  if (!isMenuOpen.value) {
    overlayMenuActive.value = false
    mobileMenuActive.value = false
  }

  isMenuOpen.value = false
}
</script>

<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppNavbar @menu-toggle="onMenuToggle"></AppNavbar>
    <div class="layout-sidebar">
      <AppMenu @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<style>
.layout-sidebar {
  background-color: #dddddd;
}
</style>
