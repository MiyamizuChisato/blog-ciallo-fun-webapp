<template>
  <div class="skeleton"/>
</template>

<style scoped>
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%
  }

  to {
    background-position: 0 50%
  }
}

.skeleton {
  background-size: 500% 100% !important;
  animation: skeleton-loading 1.5s ease-in-out infinite !important;
  background: linear-gradient(-45deg, var(--c-skeleton-light) 25%, var(--c-skeleton-deep) 45%, var(--c-skeleton-light) 65%);
}


</style>