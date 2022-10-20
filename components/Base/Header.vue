<script setup lang="ts"></script>

<template>
  <!-- <div class="w-screen shadow absolute h-14 left-0" style="z-index: -1;"></div> -->
  <div class="flex justify-between items-center h-16">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped></style>
