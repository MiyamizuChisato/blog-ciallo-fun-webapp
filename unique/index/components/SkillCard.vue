<script setup lang="ts">
const skills = [
  {
    top: "i-logos-intellij-idea",
    bottom: "i-logos-visual-studio-code"
  },
  {
    top: "i-logos-java",
    bottom: "i-logos-spring-icon"
  },
  {
    top: "i-logos-mysql-icon",
    bottom: "i-logos-redis"
  },
  {
    top: "i-logos-docker-icon",
    bottom: "i-logos-nginx"
  },
  {
    top: "i-logos-vue",
    bottom: "i-logos-react"
  },
  {
    top: "i-logos-vitejs",
    bottom: "i-logos-git-icon"
  },
  {
    top: "i-logos-rabbitmq-icon",
    bottom: "i-logos-elasticsearch"
  },
  {
    top: "i-logos-linux-tux",
    bottom: "i-logos-apple"
  },
  {
    top: "i-logos-nuxt-icon",
    bottom: "i-logos-pinia"
  },
  {
    top: "i-logos-android-icon",
    bottom: "i-logos-microsoft-windows-icon"
  },
  {
    top: "i-logos-intellij-idea",
    bottom: "i-logos-visual-studio-code"
  },
  {
    top: "i-logos-java",
    bottom: "i-logos-spring-icon"
  },
  {
    top: "i-logos-mysql-icon",
    bottom: "i-logos-redis"
  },
  {
    top: "i-logos-docker-icon",
    bottom: "i-logos-nginx"
  },
  {
    top: "i-logos-vue",
    bottom: "i-logos-react"
  },
  {
    top: "i-logos-vitejs",
    bottom: "i-logos-git-icon"
  },
  {
    top: "i-logos-rabbitmq-icon",
    bottom: "i-logos-elasticsearch"
  },
  {
    top: "i-logos-linux-tux",
    bottom: "i-logos-apple"
  },
  {
    top: "i-logos-nuxt-icon",
    bottom: "i-logos-pinia"
  },
  {
    top: "i-logos-android-icon",
    bottom: "i-logos-microsoft-windows-icon"
  },
]
</script>

<template>
  <front-card>
    <template #head>
      <div>
        技能
      </div>
    </template>
    <template #body>
      <div class="text-catch">
        开启创造力
      </div>
    </template>
    <template #foot>
      <div class="flex my-4">
        <div class="tag-container flex flex-nowrap">
          <div v-for="(skill,index) in skills" :key="index">
            <div class="bg-inner my-4 mx-2 flex justify-center items-center p-7 rounded-6 translate-x--12">
              <i class="text-14" :class="skill.top"/>
            </div>
            <div class="bg-inner my-4 mx-2 flex justify-center items-center p-7 rounded-6">
              <i class="text-14" :class="skill.bottom"/>
            </div>
          </div>
        </div>
      </div>
    </template>
  </front-card>
</template>

<style scoped>
@keyframes rowLeft {
  from {
    transform: translateX(0)
  }

  to {
    transform: translateX(-50%)
  }
}

.tag-container {
  animation: rowLeft 45s linear infinite;
}
</style>