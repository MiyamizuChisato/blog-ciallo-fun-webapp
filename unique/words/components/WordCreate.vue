<script setup lang="ts">
const sheet = ref(false)
const content = ref('')
</script>

<template>
  <div class="position-fixed right-8 bottom-8">
    <v-btn @click="sheet=true" icon="i-ic-round-edit-note" color="primary"/>
  </div>
  <v-bottom-sheet height="100%" v-model="sheet" scrollable>
    <v-card class="bg-inner">
      <v-card-title>
        <div @click="sheet=false" class="flex items-center text-primary cursor-pointer">
          <i class="i-ic-round-arrow-back-ios"/>
          <span class="mx-1">返回</span>
        </div>
      </v-card-title>
      <v-card-text class="text">
        <div class="shadow bg-wrapper rounded-3 p-4">
          <div class="mb-2">
            <v-avatar size="36" image="https://ui.shadcn.com/avatars/02.png"/>
            <span class="mx-2 w-2 overflow-hidden text-holder">Jeff Alan</span>
          </div>
          <p class="text-stress">
            {{ content }}
          </p>
        </div>
      </v-card-text>
      <v-card-actions class="mx-4">
        <message-editor v-model="content"/>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>