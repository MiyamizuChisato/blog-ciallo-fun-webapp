<script setup lang="ts">
defineProps<{
  version: string
  date: string
  content: string[]
}>()
</script>

<template>
  <div data-aos="fade-up" class="text-stress text-xl font-bold">
    {{ version }}
  </div>
  <div data-aos="fade-up" class="text-muted">
    {{ date }}
  </div>
  <div data-aos="fade-up" class="text-holder pt-2">
    <div v-for="i in content">{{ i }}</div>
  </div>
</template>

<style scoped>

</style>