<script setup lang="ts">

</script>

<template>
  <div class="aspect-ratio-16/9">
    <skeleton class="w-full h-full"/>
  </div>
  <div class="px-4">
    <div class="flex mt-10 mb-8 h-12">
      <skeleton class="rounded w-60"/>
    </div>
    <div class="flex mb-10 h-10 justify-between">
      <skeleton class="rounded w-40"/>
      <skeleton class="rounded w-30"/>
    </div>
    <div>
      <skeleton class="rounded h-4 my-4" v-for="i in 12" :key="i"/>
    </div>
  </div>
</template>