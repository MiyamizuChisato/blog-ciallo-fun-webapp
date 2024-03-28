<script setup lang="ts">
import avatar from "assets/images/avatar.jpg";

const edit = ref(false)

</script>

<template>
  <div>
    <v-btn color="primary" density="compact" variant="tonal" v-if="edit" @click="edit=false">
      保存修改
    </v-btn>
    <v-btn color="primary" density="compact" variant="tonal" v-else @click="edit=true">
      信息修改
    </v-btn>
  </div>
  <div class="text-stress" v-if="edit">
    <div class="mt-6 bg-inner">
      <v-file-input label="头像" placeholder="123" hide-details prepend-icon="">
        <template #append>
          <div class="mr-4">
            <v-avatar :image="avatar"/>
          </div>
        </template>
      </v-file-input>
    </div>
    <div class="mt-6 bg-inner">
      <v-text-field label="昵称" hide-details/>
    </div>
    <div class="mt-6 bg-inner">
      <v-text-field label="签名" hide-details/>
    </div>
    <div class="mt-6 bg-inner">
      <v-text-field label="站点" hide-details/>
    </div>
    <div class="mt-6 bg-inner">
      <v-select label="性别" hide-details/>
    </div>
    <div class="mt-6 bg-inner">
      <v-text-field type="date" label="生日" hide-details/>
    </div>
  </div>
  <div v-else>
    <div class="mt-6 flex items-center justify-between">
      <div class="text-holder">
        身份
      </div>
      <div class="text-stress">
        注册会员
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between">
      <div class="text-holder">
        年龄
      </div>
      <div class="text-stress">
        24
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between">
      <div class="text-holder">
        性别
      </div>
      <div class="text-stress">
        男生
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between">
      <div class="text-holder">
        站点
      </div>
      <div class="text-stress">
        github.com
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between">
      <div class="text-holder">
        注册日期
      </div>
      <div class="text-stress">
        2024-01-01
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>