<script setup lang="ts">
import hitori from 'assets/images/hitori.jpg'
import kita from 'assets/images/kita.png'
import nijika from 'assets/images/nijika.jpg'
import ryou from 'assets/images/ryou.png'
</script>

<template>
  <v-col md="3" cols="6">
    <front-card>
      <template #full>
        <div class="w-full">
          <v-img width="100%" :src="nijika"/>
        </div>
      </template>
    </front-card>
  </v-col>
  <v-col md="3" cols="6">
    <front-card>
      <template #full>
        <div class="w-full">
          <v-img width="100%" :src="hitori"/>
        </div>
      </template>
    </front-card>
  </v-col>
  <v-col md="3" cols="6">
    <front-card>
      <template #full>
        <div class="w-full">
          <v-img width="100%" :src="kita"/>
        </div>
      </template>
    </front-card>
  </v-col>
  <v-col md="3" cols="6">
    <front-card>
      <template #full>
        <div class="w-full">
          <v-img width="100%" :src="ryou"/>
        </div>
      </template>
    </front-card>
  </v-col>
</template>

<style scoped>

</style>