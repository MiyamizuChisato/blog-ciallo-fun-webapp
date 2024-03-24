<script setup lang="ts">
</script>

<template>
  <div class="shadow bg-wrapper rounded-3 p-4">
    <div class="text-xs mb-4 text-holder">最近访客</div>
    <v-row>
      <v-col cols="4" v-for="i in 6" :key="6">
        <div class="flex flex-col items-center py-2 rounded-2 cursor-pointer hover:bg-inner" v-ripple>
          <v-avatar size="32" image="https://ui.shadcn.com/avatars/02.png"/>
          <div class="text-sm my-1 text-stress">
            Ciallo
          </div>
          <div class="text-xs text-holder text-center">
            1个月前来过
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>