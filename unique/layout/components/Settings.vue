<script setup lang="ts">
import LanguageSetting from "~/unique/layout/components/LanguageSetting.vue";
import LoginSetting from "~/unique/layout/components/LoginSetting.vue";
import ThemeSetting from "~/unique/layout/components/ThemeSetting.vue";


</script>

<template>
  <div class="position-absolute right-4 lg:right-12">
    <theme-setting/>
    <language-setting/>
    <login-setting/>
  </div>
</template>

<style scoped>

</style>