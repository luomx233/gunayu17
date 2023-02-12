<script setup lang="ts"></script>

<template>
  <div>
    <div class="header content-center grid grid-cols-2">
      <div class="left text-white"><slot name="left"></slot></div>
      <div class="right justify-items-end text-right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="content"><slot name="content"></slot></div>
  </div>
</template>

<style scoped>
.header {
  background-image: url(/images/index_tit.png);
  background-repeat: no-repeat;
  height: 40px;
  padding-left: 25px;
}
</style>
