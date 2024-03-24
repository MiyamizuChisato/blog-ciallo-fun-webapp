<script setup lang="ts">
import avatar from 'assets/images/avatar.jpg'
import Anchors from "~/unique/archive/components/Anchors.vue";
import AosMarkdownIt from "~/unique/archive/components/AosMarkdownIt.vue";
import a from '~/assets/images/yasuo.jpg'
const route = useRoute();
const url = "https://fun-ciallo-blog-1302869254.cos.ap-shanghai.myqcloud.com/blog%2Fmarkdown%2Ffun%20game.md"
const {data} = await useFetch('/api/markdown', {
  params: {
    url,
    id: route.params.id
  }
})

</script>

<template>
  <div class="aspect-ratio-16/9 overflow-hidden">
    <v-img eager :src="a"/>
  </div>
  <div class="px-4">
    <div class="my-10">
      <h1 class="text-stress mb-8">
        赠送的芙莉莲
      </h1>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div>
            <v-avatar :image="avatar"/>
          </div>
          <div class="mx-2">
            <div class="text-sm text-stress">Chisato</div>
            <div class="text-xs text-holder">
              三月 15, 2024
            </div>
          </div>
        </div>
        <div class="text-stress">
          <v-chip>
          <span class="text-holder">
            # 动漫
          </span>
          </v-chip>
        </div>
      </div>
    </div>
    <aos-markdown-it class="pb-99" :text="data"/>
  </div>
  <anchors/>
</template>