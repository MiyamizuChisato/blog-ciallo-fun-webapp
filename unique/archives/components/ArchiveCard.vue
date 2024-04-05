<script setup lang="ts">
import a from '~/assets/images/game.jpg'

const props = defineProps<{
  id: number
}>()

function go() {
  useRouter().push(`/archive/${props.id}`)
}
</script>

<template>
  <div class="shadow rounded-3 bg-wrapper overflow-hidden">
    <div class="aspect-ratio-16/9">
      <v-img :src="a" cover eager>
        <template #placeholder>
          <div class="w-full aspect-ratio-16/9 flex justify-center items-center">
            <i class="i-line-md-loading-loop text-10 text-stress"/>
          </div>
        </template>
      </v-img>
    </div>
    <div class="p-4">
      <h1 class="text-stress font-400 text-5 line-1">
        赠送的芙莉莲 : 镜莲华
      </h1>
      <div class="text-muted text-sm">
        4月 24, 2024
      </div>
      <div class="text-holder flex items-center overflow-hidden h-18 text-sm">
        <p data-aos="fade-up" class="line-2 scroll-reveal">
          苍月草是来自勇者故乡的特产，而镜莲华是这片大陆永恒的爱，虽然芙莉莲这么笨拙的精灵一定不了解镜莲华的花语，却在挑选礼物时随便的选择到了镜莲花饰的戒指...
        </p>
      </div>
      <div class="flex justify-between">
        <v-btn @click="go" class="btn-silence" flat>
          <span class="text-holder">立即阅读</span>
        </v-btn>
        <div class="flex text-holder">
          <div class="flex items-center mx-1">
            <i class="i-ic-sharp-remove-red-eye"/>
            <span class="text-sm mx-1">24</span>
          </div>
          <div class="flex items-center mx-1">
            <i class="text-xl i-line-md-star-pulsating-filled-loop"/>
            <span class="text-sm mx-1">24</span>
          </div>
          <div class="flex items-center mx-1">
            <i class="text-sm i-ic-round-chat-bubble"/>
            <span class="text-sm mx-1">24</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>