<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-screen text-stress">
    <i class="i-ic-round-flash-on text-20"/>
    <p class="w-72 mt-10">
      Sorry, an unforeseen fatal error has occurred.
      <button class="text-primary" @click="handleError">
         click here
      </button>
      to redirect to the home page.
    </p>
  </div>
</template>