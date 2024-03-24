<script setup lang="ts">

const titles = ref<Element[]>()
const current = ref<Element>()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      current.value = entry.target
    }
  }, {threshold: 1, rootMargin: '-33% 0% -33% 0%'})
  nextTick(() => {
    const selector = document.querySelector('.markdown-body');
    if (selector) {
      const headings = []
      for (let child of selector.children) {
        if (child.tagName === 'H1' || child.tagName === 'H2') {
          headings.push(child)
          observer.observe(child)
        }
      }
      titles.value = headings
    }
  })
})

function p(element: Element) {
  element.scrollIntoView({behavior: "smooth", block: "center"})
}
</script>

<template>
  <div class="titles position-fixed transform-translate-y--50% top-50%
   right-40 cursor-pointer text-muted">
    <template v-for="(title,index) in titles" :key="index">
      <div @click="p(title)" class="my-2 flex items-center hover:text-holder">
        <div :class="{'text-stress':title===current,'w-4 mr-6':title.tagName==='H2','w-6 mr-3':title.tagName==='H1'}"
             class="border-3 rounded-full border-solid"/>
        <div :class="{'opacity-100 text-stress':title===current}" class="heading text-sm opacity-0">
          {{ title.innerHTML }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.titles:hover .heading {
  opacity: 100;
}

.titles, .heading {
  transition: opacity ease-in-out 300ms;
}
</style>