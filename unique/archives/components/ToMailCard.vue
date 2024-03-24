<script setup lang="ts">
import MemberStatistics from "assets/MemberStatistics.png";
</script>

<template>
  <div class="shadow bg-wrapper flex items-center position-relative h-36 rounded-3 p-4">
    <div>
      <div class="text-6 text-holder">去发送</div>
      <div class="cursor-pointer">
        <a class="text-warning decoration-none" href="mailto://miyamizuchisato@gmail.com">
          Gmail
        </a>
      </div>
    </div>
    <img class="position-absolute right--12 bottom--6 w-56" :src="MemberStatistics" alt=""/>
  </div>
</template>