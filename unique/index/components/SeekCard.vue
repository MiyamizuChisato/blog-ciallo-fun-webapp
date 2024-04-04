<template>
  <div class="grid-col-span-12 md:grid-col-span-5">
    <front-card>
      <template #head>
        <div>追求</div>
      </template>
      <template #body>
        <div class="text-catch">
          <div>
            源于
          </div>
          <div>
            热爱而去创造
          </div>
          <div class="h-10 overflow-hidden">
            <ul>
              <li class="text-primary">
                体验
              </li>
              <li class="text-success">
                设计
              </li>
              <li class="text-warning">
                作品
              </li>
              <li class="text-error">
                程序
              </li>
              <li class="text-primary">
                体验
              </li>
            </ul>
          </div>
        </div>
      </template>
    </front-card>
  </div>
</template>

<style scoped>
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, calc(var(--s) * var(--h) * -1px));
  }
}

@keyframes liMove {
  0% {
    transform: translate(0, 0);
  }
  50%,
  100% {
    transform: translate(0, calc(var(--h) * -1px));
  }
}

ul {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

ul li {
  flex-shrink: 0;
  box-sizing: border-box;
}

ul li {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
}

ul {
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}

ul li {
  white-space: nowrap;
  animation: liMove calc(var(--speed)) infinite;
}
</style>