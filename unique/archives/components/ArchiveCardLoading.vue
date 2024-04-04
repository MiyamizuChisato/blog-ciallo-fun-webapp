<template>
  <div class="overflow-hidden rounded-3 shadow">
    <skeleton class="aspect-ratio-16/9"/>
    <div class="p-4 bg-wrapper">
      <skeleton class="w-60% rounded h-6"/>
      <skeleton class="w-20% rounded h-4 mt-2.5"/>
      <div class="h-18 flex flex-col justify-center">
        <skeleton class="w-full rounded h-3"/>
        <skeleton class="w-50% rounded mt-2 h-3"/>
      </div>
      <div class="flex justify-between h-9">
        <skeleton class="rounded w-24"/>
        <skeleton class="rounded w-40"/>
      </div>
    </div>
  </div>
</template>