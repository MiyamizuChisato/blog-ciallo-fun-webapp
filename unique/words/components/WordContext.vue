<script setup lang="ts">

const model = defineModel()
const content = ref('')
</script>

<template>
  <v-bottom-sheet height="100%" v-model="model" scrollable>
    <v-card class="bg-inner">
      <v-card-title>
        <div @click="model=false" class="flex items-center text-primary cursor-pointer">
          <i class="i-ic-round-arrow-back-ios"/>
          <span class="mx-1">返回</span>
        </div>
      </v-card-title>
      <v-card-text class="text">
        <div class="shadow bg-wrapper p-4">
          <div class="mb-3">
            <v-avatar size="36" image="https://ui.shadcn.com/avatars/02.png"/>
            <span class="text-holder mx-2 w-2 overflow-hidden">Jeff Alan</span>
          </div>
          <p class="text-stress">
            eamless integration of design and development. It's
            user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to
            quickly
            bring their ideas to life.",
            "Acme has helped me to create much more functional no-code sites for my customers due to the increased
            speed
            and freedom to create the UI.",
            "I love the creative freedom that Acme offers, it's a game changer for our design team",
            "My experience with Acme has been nothing short of exceptional. It has elevated my design process,
            empowered
            collaboration, and helped me deliver outstanding results. If you're a designer looking to level up your
            skills and create stunning interactive designs, I highly recommend giving Acme a try. ",
            "Acme offers an unparalleled design experience with its seamless integration of design and development.
            It's
            user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to
            quickly
            bring their ideas to life.",
            "Acme has helped me to create much more functional no-c
          </p>
        </div>
        <div v-for="i in 5" class="shadow bg-wrapper p-4 my-3">
          <div class="flex items-center justify-between text-holder mb-2">
            <div class="flex items-center text-holder">
              <div class="flex items-center">
                <v-avatar size="28" image="https://ui.shadcn.com/avatars/02.png"/>
                <span class="ml-1 text-sm">Jeff Alan</span>
              </div>
              <i class="i-ic-round-play-arrow mx-2"/>
              <div class="flex items-center">
                <v-avatar size="28" image="https://ui.shadcn.com/avatars/02.png"/>
                <span class="ml-1 text-sm">Jeff Alan</span>
              </div>
            </div>
            <div>
              <v-btn color="transparent" density="comfortable"  flat>
                <span class="text-holder">回复</span>
              </v-btn>
            </div>
          </div>
          <p class="text-stress">
            user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to
            quickly
            bring their ideas to life.",
            "Acme has helped me to create much more functional no-c
          </p>
        </div>
      </v-card-text>
      <v-card-actions class="mx-4">
          <message-editor v-model="content"/>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>

</template>