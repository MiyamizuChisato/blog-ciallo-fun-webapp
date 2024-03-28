<script setup lang="ts">

</script>

<template>
  <div class="md:w-750px px-2 mx-auto overflow-hidden">

    <div class="p-4 shadow rounded-3 bg-wrapper my-6">
      <div class="text-xs text-muted mb-4">站点用户</div>
      <div class="flex">
        <v-row>
          <v-col cols="3" v-for="i in 46" :key="6">
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
    </div>
  </div>
</template>

<style scoped>

</style>