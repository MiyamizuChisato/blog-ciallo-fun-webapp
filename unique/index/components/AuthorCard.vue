<script setup lang="ts">
import avatar from 'assets/images/avatar.jpg'
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="md:flex flex-col items-center justify-center hidden">
      <div class="author-tag bg-wrapper text-sm text-holder
      position-relative left-6 shadow rounded-full py-1 px-4 my-1">
        沉迷代码技术
      </div>
      <div class="author-tag bg-wrapper text-sm text-holder
      shadow rounded-full py-1 px-4 my-1">
        乐于分享帮助
      </div>
      <div class="author-tag bg-wrapper text-sm text-holder
      shadow rounded-full py-1 px-4 my-1">
        热衷开发软件
      </div>
      <div class="author-tag bg-wrapper text-sm text-holder
      position-relative left-6 shadow rounded-full py-1 px-4 my-1">
        一心只想搞钱
      </div>
    </div>
    <div class="w-32 flex justify-center items-center mx-8">
      <v-img rounded="full" :src="avatar"/>
    </div>
    <div class="md:flex flex-col justify-center hidden">
      <div class="author-tag author-tag-reverse bg-wrapper text-sm text-holder
      position-relative right-6 shadow rounded-full py-1 px-4 my-1">
        电子游戏高手
      </div>
      <div class="author-tag author-tag-reverse bg-wrapper text-sm text-holder
      shadow rounded-full py-1 px-2 my-1">
        只听霓虹歌单
      </div>
      <div class="author-tag author-tag-reverse bg-wrapper text-sm text-holder
      shadow rounded-full py-1 px-4 my-1">
        日常活动御宅
      </div>
      <div class="author-tag author-tag-reverse bg-wrapper text-sm text-holder
      position-relative right-6 shadow rounded-full py-1 px-4 my-1">
        梦想早日成真
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes floating {
  0% {
    transform: translate(0, 0)
  }
  25% {
    transform: translate(0, -4px)
  }
  50% {
    transform: translate(0, 4px)
  }
  75% {
    transform: translate(0, -4px)
  }
  100% {
    transform: translate(0, 0)
  }
}

@keyframes floatingReverse {
  0% {
    transform: translate(0, 0)
  }
  25% {
    transform: translate(0, 4px)
  }
  50% {
    transform: translate(0, -4px)
  }
  75% {
    transform: translate(0, 4px)
  }
  100% {
    transform: translate(0, 0)
  }
}

.author-tag:nth-child(1) {
  animation-delay: 0.1s;
}

.author-tag:nth-child(2) {
  animation-delay: 0.4s;
}

.author-tag:nth-child(3) {
  animation-delay: 0.7s;
}

.author-tag:nth-child(4) {
  animation-delay: 1s;
}

.author-tag.author-tag-reverse:nth-child(1) {
  animation-delay: 0s;
}

.author-tag.author-tag-reverse:nth-child(2) {
  animation-delay: 0.4s;
}

.author-tag.author-tag-reverse:nth-child(3) {
  animation-delay: 0.8s;
}

.author-tag.author-tag-reverse:nth-child(4) {
  animation-delay: 1.2s;
}

.author-tag {
  animation: 6s ease-in-out 0s infinite normal none running floating;
}

.author-tag.author-tag-reverse {
  animation: 6s ease-in-out 0s infinite normal none running floatingReverse;
}
</style>