<script setup lang="ts">
import OperationsStatistics from "assets/OperationsStatistics.png";
</script>

<template>
  <div class="shadow bg-wrapper flex items-center position-relative h-36 rounded-3 p-4">
    <div>
      <div class="text-6 text-holder">去访问</div>
      <div class="cursor-pointer">
        <a class="text-error decoration-none" href="https://www.bilibili.com" target="_blank">
          Bilibili
        </a>
      </div>
    </div>
    <img class="position-absolute right--12 bottom--6 w-56" :src="OperationsStatistics" alt=""/>
  </div>
</template>
