<script setup>
const navitems = await $fetch("/api/index/navbaritems");
</script>
<template>
  <div class="container">
    <Header></Header>
  </div>
  <BaseNav :navitems="navitems" />
  <NuxtPage :key="$route.fullPath" />
  <BottomInfo></BottomInfo>
</template>
<style scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem /* 16px */;
  padding-left: 1rem /* 16px */;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-right: 2rem /* 32px */;
    padding-left: 2rem /* 32px */;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-right: 4rem /* 64px */;
    padding-left: 4rem /* 64px */;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-right: 5rem /* 80px */;
    padding-left: 5rem /* 80px */;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
    padding-right: 6rem /* 96px */;
    padding-left: 6rem /* 96px */;
  }
}
</style>
