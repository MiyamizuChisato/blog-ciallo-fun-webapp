<script setup lang="ts">
import location from 'assets/images/location.png'
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <div class="shadow rounded-3 overflow-hidden mb-4 position-relative flex-1">
      <v-img cover height="100%" :src="location"/>
      <div class="location-panel h-16 p-4 w-full position-absolute bottom-0 text-6 text-stress">
          <span class="pl-6">我现在住在</span>
          <span class="font-bold"> 中国, </span>
          <span class="font-bold">重庆市</span>
      </div>
    </div>
    <div class="shadow flex justify-center items-center rounded-3 p-10 bg-wrapper">
      <v-row>
        <v-col cols="4">
          <div class="text-xs text-muted">生于</div>
          <div class="text-catch lt-sm:text-6 text-pink">2000</div>
        </v-col>
        <v-col cols="4">
          <div class="text-xs text-muted">专业</div>
          <div class="text-catch lt-sm:text-6 text-orange">计算机</div>
        </v-col>
        <v-col cols="4">
          <div class="text-xs text-muted">职业</div>
          <div class="text-catch lt-sm:text-6 text-purple">程序员</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.location-panel{
  background-color:var(--c-nav);
  backdrop-filter: blur(4px) saturate(1.4);
}
</style>