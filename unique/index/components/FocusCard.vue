<script setup lang="ts">
import focus from 'assets/images/focus.jpg'
</script>

<template>
  <front-card class="!h-96">
    <template #full>
      <div class="image-container h-full">
        <v-img height="100%" cover :src="focus"/>
      </div>
    </template>
    <template #head>
      <div class="text-dark-holder">关注偏好</div>
    </template>
    <template #body>
      <div class="text-catch text-dark-stress">
        计算机、数码科技
      </div>
    </template>
    <template #foot>
      <div class="text-dark-holder text-end">
        计算机软硬件 / 代码框架
      </div>
    </template>
  </front-card>
</template>

<style scoped>
.image-container::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  box-shadow: 0 0 240px 1px #04120f inset;
  position: absolute;
}
</style>