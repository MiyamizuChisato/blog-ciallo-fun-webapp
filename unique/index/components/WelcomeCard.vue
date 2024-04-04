<script setup lang="ts">
import FrontCard from "~/components/FrontCard.vue";
</script>

<template>
  <div class="grid-col-span-12 md:grid-col-span-7">
    <front-card>
      <template #body>
        <div class="h-full flex flex-col justify-center">
        <span class="text-lg text-dark-holder">
          你好，很高兴认识你👋
        </span>
          <span class="text-dark-stress text-catch font-bold">
          我是 Chisato
        </span>
          <span class="text-lg text-dark-holder">
          是一名程序员、独立开发者、博主
        </span>
        </div>
      </template>
      <template #full>
        <div class="bg-primary h-full"/>
      </template>
    </front-card>
  </div>
</template>