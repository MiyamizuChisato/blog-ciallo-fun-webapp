<script setup lang="ts">
import TabsMenu from "~/unique/layout/components/TabsMenu.vue";
import Settings from "~/unique/layout/components/Settings.vue";
import DropMenu from "~/unique/layout/components/DropMenu.vue";

const drawer = ref(false);
</script>

<template>
  <client-only>
    <drop-menu v-model="drawer"/>
    <v-app-bar color="transparent" class="app-bar" elevation="0">
      <div class="position-absolute text-stress flex items-center left-4 md:left-24">
        <div class="md:hidden">
          <v-btn class="text-stress" icon="i-line-md-align-justify"
                 @click="drawer=!drawer"/>
        </div>
        <div class="text-xl mx-2">
          Ciallo
        </div>
      </div>
      <tabs-menu/>
      <settings/>
    </v-app-bar>
  </client-only>
</template>
