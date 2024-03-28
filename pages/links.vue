<script setup lang="ts">
import LinkRule from "~/unique/links/components/LinkRule.vue";
import LinkCard from "~/unique/links/components/LinkCard.vue";
</script>

<template>
  <div class="md:w-750px px-2 mx-auto overflow-hidden">
    <link-rule/>
    <v-row class="my-6">
      <v-col v-for="i in 24" cols="6">
        <link-card/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>