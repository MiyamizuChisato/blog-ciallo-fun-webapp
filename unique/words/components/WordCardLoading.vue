<script setup lang="ts">
const props = defineProps<{
  loader: () => void
}>()
const loading = ref()
if (process.client) {
  const ob = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      props.loader()
    }
  }, {threshold: 0.25})
  onMounted(() => {
    ob.observe(loading.value)
  })
}
</script>

<template>
  <div ref="loading" class="shadow rounded-3 overflow-hidden bg-wrapper p-4">
    <div class="flex items-center">
      <skeleton class="h-8 w-8 rounded-full "/>
      <skeleton class="w-20 h-5 mx-2"/>
    </div>
    <div class="mt-4">
      <skeleton v-for="i in 6" class="h-5 mt-3" :key="i"/>
    </div>
  </div>
</template>