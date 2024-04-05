<script setup lang="ts">
import LinkRule from "~/unique/links/components/LinkRule.vue";
import LinkCard from "~/unique/links/components/LinkCard.vue";
</script>

<template>
  <div class="md:w-680px p-2 mx-auto">
    <link-rule/>
    <div class="grid grid-cols-12 gap-5 my-5">
      <div v-for="i in 14" class="grid-col-span-12 sm:grid-col-span-6">
        <link-card/>
      </div>
    </div>
  </div>
</template>