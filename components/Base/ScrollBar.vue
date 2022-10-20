<script setup lang="ts">
const scrollbar = ref(null);
</script>

<template>
  <div class="overflow-hidden">
    <div ref="scrollbar" class="flex flex-nowrap">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped></style>
