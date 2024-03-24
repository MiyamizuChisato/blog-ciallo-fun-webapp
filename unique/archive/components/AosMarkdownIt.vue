<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
const {$parseMarkdown,$aos} = useNuxtApp();
const parseMarkdown = $parseMarkdown()
onMounted(()=>{
  $aos().init()
})
</script>

<template>
  <div class="markdown-body overflow-hidden" v-html="parseMarkdown(text)"/>
</template>