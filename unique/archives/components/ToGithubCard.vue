<script setup lang="ts">
import VisitStatistics from "assets/VisitStatistics.png";
</script>

<template>
  <div class="shadow bg-wrapper flex items-center position-relative h-36 rounded-3 p-4">
    <div>
      <div class="text-6 text-holder">去查看</div>
      <div class="cursor-pointer">
        <a class="text-primary decoration-none" href="https://github.com/MiyamizuChisato" target="_blank">Github</a>
      </div>
    </div>
    <img class="position-absolute right--12 bottom--6 w-56" :src="VisitStatistics" alt=""/>
  </div>
</template>