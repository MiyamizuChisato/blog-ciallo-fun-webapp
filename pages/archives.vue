<script setup lang="ts">
import ArchiveCardList from "../unique/archives/components/ArchiveCardList.vue";
import ToGithubCard from "../unique/archives/components/ToGithubCard.vue";
import ToBilibiliCard from "../unique/archives/components/ToBilibiliCard.vue";
import ToMailCard from "../unique/archives/components/ToMailCard.vue";
import MemberCard from "../unique/index/components/MemberCard.vue";
import TagStatisticsCard from "../unique/archives/components/TagStatisticsCard.vue";

const {y} = useWindowScroll()
onMounted(() => {
  localStorage.setItem('archivesTop', '0')
})
onBeforeRouteLeave(() => {
  localStorage.setItem('archivesTop', y.value.toString())
})
</script>
<template>
  <div class="xl:w-1080px lg:w-750px md:w-640px p-2 mx-auto">
    <v-row>
      <v-col lg="8" cols="12">
        <archive-card-list/>
      </v-col>
      <v-col class="lt-lg:hidden" lg="4" cols="0">
        <v-row>
          <v-col cols="12">
            <to-github-card/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <to-bilibili-card/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <to-mail-card/>
          </v-col>
        </v-row>
        <v-row class="position-sticky top-18">
          <v-col cols="12">
            <member-card/>
          </v-col>
          <v-col cols="12">
            <tag-statistics-card/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>