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
  <div ref="loading">
    <slot/>
  </div>
</template>