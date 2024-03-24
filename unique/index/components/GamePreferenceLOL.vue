<script setup lang="ts">
import yasuo from 'assets/images/yasuo.jpg'
import mid from 'assets/images/mid.svg'
</script>

<template>
  <front-card class="!h-96">
    <template #head>
      <div class="text-dark-holder">爱好游戏</div>
    </template>
    <template #body>
      <div class="text-catch text-dark-stress">英雄联盟</div>
    </template>
    <template #foot>
      <div class="flex items-center justify-between text-dark-holder">
        <div>
          <v-img width="18" :src="mid"/>
        </div>
        <div>艾欧尼亚 # 你可真是个爱哭鬼</div>
      </div>
    </template>
    <template #full>
      <div class="h-full image-container">
        <v-img cover height="100%" :src="yasuo"/>
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