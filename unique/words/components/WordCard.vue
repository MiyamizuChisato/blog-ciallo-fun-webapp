<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <div class="p-4 shadow rounded-3 bg-wrapper text-stress cursor-pointer">
    <div class="flex items-center">
        <img class="rounded-full" width="32" src="https://ui.shadcn.com/avatars/02.png" alt=""/>
        <span class="text-holder mx-2 text-sm">Jeff Alan</span>
    </div>
    <p class="mt-2 line-8">
      {{ message }}
    </p>
  </div>
</template>