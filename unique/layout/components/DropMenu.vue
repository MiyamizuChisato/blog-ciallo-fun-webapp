<script setup lang="ts">
const drawer = defineModel()

const router = useRouter();
const path = computed(() => router.currentRoute.value.path)
router.afterEach(() => {
  drawer.value = false
})
const menus = [
  {
    path: '/',
    name: '主页'
  },
  {
    path: '/archives',
    name: '档案'
  },
  {
    path: '/words',
    name: '一言'
  },
  {
    path: '/links',
    name: '友邻'
  },
  {
    path: '/logs',
    name: '日志'
  },
]
</script>

<template>
  <div :class="{'h-100%':drawer,'h-16':!drawer}"
       class="menu w-full pt-16 pr-1 position-fixed top-0 right-0
       transition-height left-0 z-10">
    <div class="overflow-hidden h-full px-6 cursor-pointer text-xl">
      <NuxtLink v-for="menu in menus" class="text-decoration-none text-holder" :to="menu.path">
        <div class="py-2 hover:text-stress" :class="{'text-primary':menu.path===path}">
          {{ menu.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.menu {
  backdrop-filter: blur(20px);
  background-color: var(--c-nav);
}
</style>