<script setup lang="ts">
const skills = [
  {
    top: "i-devicon-intellij",
    bottom: "i-devicon-vscode"
  },
  {
    top: "i-devicon-java",
    bottom: "i-devicon-spring"
  },
  {
    top: "i-devicon-mysql",
    bottom: "i-devicon-redis"
  },
  {
    top: "i-devicon-docker",
    bottom: "i-devicon-nginx"
  },
  {
    top: "i-devicon-vuejs",
    bottom: "i-devicon-react"
  },
  {
    top: "i-devicon-vitejs",
    bottom: "i-devicon-git"
  },
  {
    top: "i-devicon-rabbitmq",
    bottom: "i-devicon-elasticsearch"
  },
  {
    top: "i-devicon-linux",
    bottom: "i-devicon-apple"
  },
  {
    top: "i-devicon-nuxtjs",
    bottom: "i-devicon-nextjs"
  },
  {
    top: "i-devicon-androidstudio",
    bottom: "i-devicon-windows11"
  },
  {
    top: "i-devicon-intellij",
    bottom: "i-devicon-vscode"
  },
  {
    top: "i-devicon-java",
    bottom: "i-devicon-spring"
  },
  {
    top: "i-devicon-mysql",
    bottom: "i-devicon-redis"
  },
  {
    top: "i-devicon-docker",
    bottom: "i-devicon-nginx"
  },
  {
    top: "i-devicon-vuejs",
    bottom: "i-devicon-react"
  },
  {
    top: "i-devicon-vitejs",
    bottom: "i-devicon-git"
  },
  {
    top: "i-devicon-rabbitmq",
    bottom: "i-devicon-elasticsearch"
  },
  {
    top: "i-devicon-linux",
    bottom: "i-devicon-apple"
  },
  {
    top: "i-devicon-nuxtjs",
    bottom: "i-devicon-nextjs"
  },
  {
    top: "i-devicon-androidstudio",
    bottom: "i-devicon-windows11"
  },
]
</script>

<template>
  <div class="grid-col-span-12 lg:grid-col-span-6">
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
  </div>
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