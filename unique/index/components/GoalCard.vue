<template>
  <div class="grid-col-span-12 lg:grid-col-span-6">
    <front-card>
      <template #head>
        <div>
          目标
        </div>
      </template>
      <template #body>
        <div class="text-catch">
          生涯无限进步
        </div>
        <div class="text-stress">
          <div class="items-center">
            <div class="mt-8 mb-2">月薪上万（快完成了）</div>
            <v-progress-linear height="10" color="primary" model-value="80" rounded/>
          </div>
          <div class="items-center">
            <div class="mt-8 mb-2">日语过N1（再加把劲）</div>
            <v-progress-linear height="10" color="success" model-value="50" rounded/>
          </div>
          <div class="items-center">
            <div class="mt-10 mb-2">挣小目标（望不到边）</div>
            <v-progress-linear height="10" color="warning" model-value="0.1" rounded/>
          </div>
          <div class="items-center">
            <div class="mt-10 mb-2">出国旅游（想去京都）</div>
            <v-progress-linear height="10" color="error" model-value="0" rounded/>
          </div>
        </div>
      </template>
    </front-card>
  </div>
</template>