<script setup lang="ts">

</script>

<template>
  <v-btn class="text-stress" icon="">
    <i class="i-ic-round-language"/>
    <v-menu activator="parent" location="bottom end">
      <div class="p-4 mt-2 rounded-2 shadow text-stress bg-wrapper">
        <div class="my-1 px-4 py-1 rounded cursor-pointer flex items-center hover:bg-inner" v-ripple>
          English
        </div>
        <div class="my-1 px-4 py-1 rounded cursor-pointer flex items-center hover:bg-inner" v-ripple>
          日本語
        </div>
        <div class="my-1 px-4 py-1 rounded cursor-pointer flex items-center text-primary hover:bg-inner" v-ripple>
          简体中文
        </div>
      </div>
    </v-menu>
  </v-btn>
</template>
