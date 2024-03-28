<script setup lang="ts">

</script>

<template>
  <div class="shadow bg-wrapper rounded-3 p-4">
    <div class="text-xs mb-4 text-holder">文章标签</div>
    <v-row justify="start" dense>
      <v-col cols="auto" v-for="i in 11" :key="6">
        <div class="flex flex-col items-center rounded-2 cursor-pointer hover:bg-inner" v-ripple>
          <div class="text-sm p-2 text-stress">
           <span>
             Java
           </span>
            <sup>12</sup>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>