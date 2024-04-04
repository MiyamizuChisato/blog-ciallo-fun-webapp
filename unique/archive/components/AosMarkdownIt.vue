<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
const {$parseMarkdown} = useNuxtApp();
const parseMarkdown = $parseMarkdown()
</script>

<template>
  <div class="markdown-body overflow-hidden" v-html="parseMarkdown(text)"/>
</template>