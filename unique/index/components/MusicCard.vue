<script setup lang="ts">
import music from 'assets/images/music.jpeg'
</script>

<template>
  <div class="grid-col-span-12 lg:grid-col-span-6">
    <front-card class="h-128">
      <template #full>
        <div class="image-container h-full">
          <v-img height="100%" cover :src="music"/>
        </div>
      </template>
      <template #head>
        <div class="text-dark-holder">音乐偏好</div>
      </template>
      <template #body>
        <div class="text-catch text-dark-stress">
          <div>
            ACG、纯音乐
          </div>
          <div>
            Yorushika
          </div>
        </div>
      </template>
      <template #foot>
        <div class="text-end">
          <a class="text-dark-holder decoration-none" href="https://yorushika.com/" target="_blank">
            关于 yorushika 的信息
          </a>
        </div>
      </template>
    </front-card>
  </div>
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