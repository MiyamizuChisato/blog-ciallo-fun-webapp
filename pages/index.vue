<script setup lang="ts">
import GoalCard from "~/unique/index/components/GoalCard.vue";
import DesireCard from "~/unique/index/components/DesireCard.vue";
import EvaluateCard from "~/unique/index/components/EvaluateCard.vue";
import FocusCard from "~/unique/index/components/FocusCard.vue";
import GamePreferenceLOL from "~/unique/index/components/GamePreferenceLOL.vue";
import GamePreferenceMH from "~/unique/index/components/GamePreferenceMH.vue";
import StatisticsCard from "~/unique/index/components/StatisticsCard.vue";
import MiscellaneousCard from "~/unique/index/components/MiscellaneousCard.vue";
import AuthorCard from "~/unique/index/components/AuthorCard.vue";
import WelcomeCard from "~/unique/index/components/WelcomeCard.vue";
import MusicCard from "../unique/index/components/MusicCard.vue";
import SkillCard from "../unique/index/components/SkillCard.vue";
import SeekCard from "../unique/index/components/SeekCard.vue";
import RockCard from "../unique/index/components/RockCard.vue";

onMounted(() => {
  useAppStore().setLoading(false)
})

</script>

<template>
  <div class="xl:w-1180px w-full mx-auto p-1">
    <AuthorCard/>
    <div class="text-10 my-10 text-center text-stress">Ciallo.Fun</div>
    <v-row>
      <v-col md="7" cols="12">
        <welcome-card/>
      </v-col>
      <v-col md="5" cols="12">
        <seek-card/>
      </v-col>
      <v-col md="6" cols="12">
        <skill-card/>
      </v-col>
      <v-col md="6" cols="12">
        <goal-card/>
      </v-col>
      <v-col sm="5" cols="12">
        <desire-card/>
      </v-col>
      <v-col sm="7" cols="12">
        <evaluate-card/>
      </v-col>
      <v-col sm="6" cols="12">
        <focus-card/>
      </v-col>
      <v-col sm="6" cols="12">
        <music-card/>
      </v-col>
      <v-col sm="6" cols="12">
        <game-preference-l-o-l/>
      </v-col>
      <v-col sm="6" cols="12">
        <game-preference-m-h/>
      </v-col>
      <rock-card/>
      <v-col sm="5" cols="12">
        <statistics-card/>
      </v-col>
      <v-col sm="7" cols="12">
        <miscellaneous-card/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>