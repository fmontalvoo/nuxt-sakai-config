<script setup lang="ts">
const onClick = (event: Event) => {
  console.log('Hello World', event)
}
</script>

<template>
  <div>
    <Button label="Prime" icon="pi pi-check" @click="onClick"></Button>
  </div>
</template>
