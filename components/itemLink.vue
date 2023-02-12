<script setup lang="ts">
const { title, id } = defineProps(["title", "id"]);
</script>

<template>
  <NuxtLink :to="'/productDetail/' + id" class="overflow-hidden">
    <span class="itemLink pl-2 hover:text-orange-500">{{ title }}</span>
  </NuxtLink>
</template>

<style scoped>
.itemLink {
  background: url(/images/option.png) left center no-repeat;
  line-height: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
