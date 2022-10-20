<script setup lang="ts">
const { id, title, imgurl } = defineProps(["id", "title", "imgurl"]);
</script>

<template>
  <NuxtLink :to="'/productDetail/' + id" class="overflow-hidden">
    <div class="hover:text-orange-500 text-center">
      <img :src="imgurl" alt="" class="p-1 border border-slate-400" />
      <span>{{ title }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
