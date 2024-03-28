<script setup lang="ts">
import avatar from '~/assets/images/avatar.jpg'
</script>

<template>
  <div data-aos="fade-up" class="bg-wrapper h-full flex p-4 shadow rounded-3">
    <div class="flex items-center">
      <v-avatar :image="avatar"/>
    </div>
    <div class="mx-4">
      <div class="text-stress text-lg">Ciallo</div>
      <div class="text-holder text-sm h-10 flex items-center">
        <p class="line-2">
          我喜欢孤独的冷，我也喜欢
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>