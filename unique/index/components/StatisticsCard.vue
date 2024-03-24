<script setup lang="ts">
import statistics from 'assets/images/statistics.jpg'
const todayVisitor = ref(0)
const todayMember = ref(0)
const totalVisitor = ref(0)
const totalMember = ref(0)
const total = ref(0)
onMounted(() => {
  todayVisitor.value = 2042
  todayMember.value = 1023
  totalVisitor.value = 101234
  totalMember.value = 1022
  total.value = 420
})
</script>

<template>
  <front-card>
    <template #full>
      <div class="image-container h-full">
        <v-img height="100%" cover :src="statistics"/>
      </div>
    </template>
    <template #head>
      <div class="text-dark-holder">统计数据</div>
    </template>
    <template #body>
      <div class="text-catch text-dark-stress">
        <div>访问统计</div>
        <div class="mt-8">
          <v-row>
            <v-col cols="6">
              <div>
                <div class="text-xs text-dark-holder">今日访问</div>
                <div>{{ todayVisitor }}</div>
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                <div class="text-xs text-dark-holder">今日人数</div>
                <div>{{ todayMember }}</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div>
                <div class="text-xs text-dark-holder">总计访问</div>
                <div>{{ totalVisitor }}</div>
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                <div class="text-xs text-dark-holder">总计人数</div>
                <div>{{ totalMember }}</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div>
                <div class="text-xs text-dark-holder">运行时间</div>
                <div>{{ total }}</div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </template>
  </front-card>
</template>

<style scoped>
.image-container::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  box-shadow: 0 0 240px 60px #04120f inset;
  position: absolute;
}
</style>