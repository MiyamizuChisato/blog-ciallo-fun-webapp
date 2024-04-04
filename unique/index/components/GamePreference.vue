<script setup lang="ts">
import game from 'assets/images/game.jpg'
</script>

<template>
  <div class="grid-col-span-12 lg:grid-col-span-6">
    <front-card class="h-108">
      <template #head>
        <div class="text-dark-holder">爱好游戏</div>
      </template>
      <template #body>
        <div class="text-catch text-dark-stress">
          怪物猎人
        </div>
      </template>
      <template #foot>
        <div class="text-end text-light-muted">
          <div>PSN # Miyamizuch1sato</div>
        </div>
      </template>
      <template #full>
        <div class="image-container h-full">
          <v-img height="100%" cover :src="game"/>
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