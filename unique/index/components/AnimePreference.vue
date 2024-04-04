<script setup lang="ts">
import anime from 'assets/images/anime.jpg'
</script>

<template>
  <div class="grid-col-span-12 lg:grid-col-span-6">
    <front-card class="h-108">
      <template #head>
        <div class="text-dark-holder">喜欢动画</div>
      </template>
      <template #body>
        <div class="text-catch text-dark-stress">孤独摇滚</div>
      </template>
      <template #foot>
        <div class="text-catch text-dark-stress text-end">
          芙莉莲
        </div>
      </template>
      <template #full>
        <div class="h-full w-full image-container">
          <v-img cover height="100%" :src="anime"/>
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