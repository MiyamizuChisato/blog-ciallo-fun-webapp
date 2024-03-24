<template>
  <div class="front-card bg-wrapper position-relative overflow-hidden shadow
   rounded-3 px-8 py-6 flex flex-col justify-between h-full">
    <div class="text-xs text-muted z-2">
      <slot name="head"/>
    </div>
    <div class="py-4 z-2 flex-1">
      <slot name="body"/>
    </div>
    <div class="text-sm text-muted z-2">
      <slot name="foot"/>
    </div>
    <div class="position-absolute top-0 left-0 right-0 bottom-0 z-1">
      <slot name="full"/>
    </div>
  </div>
</template>

<style scoped>
.front-card {
  min-height: 210px;
}
</style>