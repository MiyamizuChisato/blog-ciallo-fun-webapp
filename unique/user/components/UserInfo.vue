<script setup lang="ts">
import ava from '~/assets/images/avatar.jpg'
</script>

<template>
  <div class="shadow rounded-3 p-4 bg-wrapper">
    <div class="text-sm h-12 flex justify-end items-center">
      <div class="text-muted" v-if="false">20天前来过</div>
      <div class="text-success" v-else>在线</div>
    </div>
    <div class="flex justify-center">
      <v-avatar size="96" :image="ava"/>
    </div>
    <div class="text-center">
      <div class="mt-4 mb-1 text-stress text-xl">Chisato</div>
      <div class="text-holder">
        不是我选择了code，而是code选择了我
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>