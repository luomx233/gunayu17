<script setup lang="ts">
import HeaderLeft from "./HeaderLeft.vue";
import HeaderRight from "./HeaderRight.vue";
</script>

<template>
  <BaseHeader>
    <template #left>
      <HeaderLeft></HeaderLeft>
    </template>
    <template #right>
      <HeaderRight></HeaderRight>
    </template>
  </BaseHeader>
</template>

<style scoped></style>
