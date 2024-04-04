<script setup lang="ts">
import ArchiveCardList from "../unique/archives/components/ArchiveCardList.vue";
import ToGithubCard from "../unique/archives/components/ToGithubCard.vue";
import ToBilibiliCard from "../unique/archives/components/ToBilibiliCard.vue";
import ToMailCard from "../unique/archives/components/ToMailCard.vue";
import MemberCard from "../unique/index/components/MemberCard.vue";
import TagStatisticsCard from "../unique/archives/components/TagStatisticsCard.vue";
import LoadMore from "~/components/LoadMore.vue";
import ArchiveCardLoading from "~/unique/archives/components/ArchiveCardLoading.vue";

const {y} = useWindowScroll()
onMounted(() => {
  localStorage.setItem('archivesTop', '0')
})
onBeforeRouteLeave(() => {
  localStorage.setItem('archivesTop', y.value.toString())
})
</script>
<template>
  <div class="xl:w-1180px lg:w-992px sm:w-640px p-2 mx-auto">
    <div class="grid grid-cols-12 grid-gap-8">
      <div class="lg:grid-col-span-8 grid-col-span-12">
        <suspense>
          <archive-card-list/>
          <template #fallback>
            <archive-card-loading/>
          </template>
        </suspense>
      </div>
      <div class="lg:grid-col-span-4 lt-lg:hidden">
        <div class="mb-5">
          <to-github-card/>
        </div>
        <div class="mb-5">
          <to-bilibili-card/>
        </div>
        <div class="mb-5">
          <to-mail-card/>
        </div>
        <div class="position-sticky top-18">
          <div class="mb-5">
            <member-card/>
          </div>
          <div class="mb-5">
            <tag-statistics-card/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>