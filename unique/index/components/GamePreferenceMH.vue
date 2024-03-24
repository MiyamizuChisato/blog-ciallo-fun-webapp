<script setup lang="ts">
import mh from 'assets/images/mh.jpg'
import katana from 'assets/images/katana.png'
</script>

<template>
  <front-card class="!h-96">
    <template #full>
      <div class="image-container h-full">
        <v-img height="100%" cover :src="mh"/>
      </div>
    </template>
    <template #head>
      <div class="text-dark-holder">爱好游戏</div>
    </template>
    <template #body>
      <div class="text-catch text-dark-stress">
        怪物猎人
      </div>
    </template>
    <template #foot>
      <div class="flex items-center justify-between text-dark-holder">
        <div>
          <v-img width="24" :src="katana"/>
        </div>
        <div>PSN # Miyamizuch1sato</div>
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