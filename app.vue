<script setup lang="ts">
const {$aos} = useNuxtApp()
const preload = ref(true)
onMounted(() => {
  $aos().init({
    duration: 900,
    disable: "mobile",
    once: true,
    offset: 0,
    delay: 0
  })
  preload.value = false
})
</script>
<template>
  <loading v-if="preload"/>
  <v-app class="bg-transparent">
    <NuxtLayout name="default"/>
  </v-app>
</template>
