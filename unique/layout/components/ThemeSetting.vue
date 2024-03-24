<script setup lang="ts">
const dark = useDark()
const toggleDark = useToggle(dark);
</script>

<template>
  <v-btn class="text-stress" @click="toggleDark()" icon="">
    <i v-if="dark" class="i-line-md-moon-filled-alt-to-sunny-filled-loop-transition"/>
    <i v-else class="i-line-md-sunny-filled-loop-to-moon-filled-loop-transition"/>
  </v-btn>
</template>
