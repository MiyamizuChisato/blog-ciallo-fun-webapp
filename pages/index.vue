<script setup lang="ts">
import GoalCard from "~/unique/index/components/GoalCard.vue";
import DesireCard from "~/unique/index/components/DesireCard.vue";
import EvaluateCard from "~/unique/index/components/EvaluateCard.vue";
import FocusCard from "~/unique/index/components/FocusCard.vue";
import AnimePreference from "~/unique/index/components/AnimePreference.vue";
import GamePreference from "~/unique/index/components/GamePreference.vue";
import StatisticsCard from "~/unique/index/components/StatisticsCard.vue";
import MiscellaneousCard from "~/unique/index/components/MiscellaneousCard.vue";
import AuthorCard from "~/unique/index/components/AuthorCard.vue";
import WelcomeCard from "~/unique/index/components/WelcomeCard.vue";
import MusicCard from "../unique/index/components/MusicCard.vue";
import SkillCard from "../unique/index/components/SkillCard.vue";
import SeekCard from "../unique/index/components/SeekCard.vue";
import RockCard from "../unique/index/components/RockCard.vue";

</script>

<template>
  <div class="xl:w-1280px mx-auto p-2">
    <AuthorCard/>
    <div class="text-10 my-10 text-center text-stress">Ciallo.Fun</div>
    <div class="grid grid-cols-12 gap-5">
      <welcome-card/>
      <seek-card/>
      <skill-card/>
      <goal-card/>
      <desire-card/>
      <evaluate-card/>
      <focus-card/>
      <music-card/>
      <anime-preference/>
      <game-preference/>
      <rock-card/>
      <statistics-card/>
      <miscellaneous-card/>
    </div>
  </div>
</template>
