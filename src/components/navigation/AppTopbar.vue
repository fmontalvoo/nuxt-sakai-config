<script setup lang="ts">
const emit = defineEmits(['topbar-menu-toggle', 'menu-toggle'])

const onMenuToggle = (event: any) => {
  emit('menu-toggle', event)
}

// const onTopbarMenuToggle = (event: any) => {
//   emit('topbar-menu-toggle', event)
// }
</script>

<template>
  <nav class="layout-topbar navbar">
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </button>
    <NuxtLink to="/" class="layout-topbar-logo">
      <img alt="Logo" src="/images/logo_ups.png">
      <span class="title">{{ $t('app.navbar.title') }}</span>
    </NuxtLink>

    <button v-styleclass="{
      selector: '@next',
      enterClass: 'hidden',
      enterActiveClass: 'scalein',
      leaveToClass: 'hidden',
      leaveActiveClass: 'fadeout',
      hideOnOutsideClick: true
    }" class="p-link layout-topbar-menu-button layout-topbar-button">
      <i class="pi pi-ellipsis-v" />
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar" />
          <span>{{ $t('app.navbar.events') }}</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog" />
          <span>{{ $t('app.navbar.settings') }}</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>{{ $t('app.navbar.profile') }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
img {
  margin-left: 0.5rem;
}

.navbar {
  background-color: #205081;
}

.title {
  font-size: 1.2rem;
  color: white;
  /* font-weight: 600; */
}

.pi-bars {
  color: #a0a0a0;
}
</style>