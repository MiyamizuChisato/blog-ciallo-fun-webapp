<script setup lang="ts">
import UserInfo from "~/unique/user/components/UserInfo.vue";
import UserProfile from "~/unique/user/components/UserProfile.vue";
import UserWords from "~/unique/user/components/UserWords.vue";
import UserSecurity from "~/unique/user/components/UserSecurity.vue";

const tab = ref('profile')
</script>

<template>
  <div class="md:w-750px px-2 mx-auto">
    <user-info/>
    <div class="text-stress rounded-3 overflow-hidden mt-3 mb-4 bg-wrapper shadow">
      <v-tabs  v-model="tab" color="primary" fixed-tabs>
        <v-tab value="profile">详情</v-tab>
        <v-tab value="security">账户</v-tab>
      </v-tabs>
    </div>
    <v-window v-model="tab" class="bg-wrapper p-4 shadow rounded-3">
      <v-window-item value="profile">
        <user-profile/>
      </v-window-item>
      <v-window-item value="security">
        <user-security/>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped>

</style>