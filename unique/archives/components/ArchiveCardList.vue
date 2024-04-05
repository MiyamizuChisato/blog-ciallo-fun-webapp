<script setup lang="ts">
import ArchiveCard from "~/unique/archives/components/ArchiveCard.vue";
import ArchiveCardLoading from "~/unique/archives/components/ArchiveCardLoading.vue";
import {testApi, testSSRApi} from "~/api/archive";

const cards = ref(0)
const {data} = await testSSRApi()
if (data.value) {
  cards.value += data.value?.payload
}else {
  useRouter().push('/error')
}
async function loader() {
  const {payload} = await testApi()
  cards.value += payload
}
</script>

<template>
  <div class="mb-5" v-for="i in cards">
    <archive-card :id="i"/>
  </div>
    <div class="mb-5">
      <load-more :loader="loader">
        <archive-card-loading/>
      </load-more>
    </div>
</template>
