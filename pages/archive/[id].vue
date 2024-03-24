<script setup lang="ts">
import Archive from "~/unique/archive/components/Archive.vue";
import ArchiveLoading from "~/unique/archive/components/ArchiveLoading.vue";
</script>

<template>
  <div class="mx-auto md:w-750px">
    <suspense>
      <archive/>
      <template #fallback>
        <archive-loading/>
      </template>
    </suspense>
  </div>
</template>
