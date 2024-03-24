<script setup lang="ts">
import ArchiveCard from "~/unique/archives/components/ArchiveCard.vue";
import ArchiveCardLoading from "~/unique/archives/components/ArchiveCardLoading.vue";

const {data} = useFetch<number>('/api/card')
const loader = useThrottleFn(async () => {
  if (data.value) {
    const value = await $fetch('/api/card')
    data.value += value
  }
}, 500)

</script>

<template>
  <v-row>
    <v-col cols="12" v-for="i in data" :key="i">
      <archive-card :id="i"/>
    </v-col>
    <v-col cols="12">
      <archive-card-loading :loader="loader"/>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>