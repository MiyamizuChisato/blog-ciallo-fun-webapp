<script setup lang="ts">
import Word from "~/unique/words/components/WordCard.vue";
import WordContext from "~/unique/words/components/WordContext.vue";
import WordCreate from "~/unique/words/components/WordCreate.vue";
import WordCardLoading from "~/unique/words/components/WordCardLoading.vue";

const sheet = ref(false)
const {data} = useFetch<string[]>("/api/words")
const words = computed(() => {
  if (data.value)
    return [...data.value, "", "", "", ""]
  return ["", "", "", ""]
})
const loader = useDebounceFn(async () => {
  if (data.value) {
    const value = await $fetch<string[]>('api/words')
    data.value = [...data.value, ...value]
  }
}, 200)
</script>

<template>
  <div class="xl:w-1180px p-2 mx-auto">
    <masonry-wall :items="words" :ssr-column="4" :column-width="240" :gap="20">
      <template #default="{ item, index }">
        <word v-if="item!==''" @click="sheet = true" :message="item"/>
        <word-card-loading v-else :loader="loader"/>
      </template>
    </masonry-wall>
    <word-context v-model="sheet"/>
    <word-create/>
  </div>
</template>
