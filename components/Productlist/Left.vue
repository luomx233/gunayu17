<script setup lang="ts">
const productItems = await useFetch(() => "/api/index/producslist");
</script>

<template>
  <div>
    <div class="text-3xl text-white bg-blue-500 p-6">产品系列</div>
    <NuxtLink
      v-for="(items, index) in productItems"
      :to="items.linkto"
      :key="items.linkto"
    >
      <div
        class="w-full p-3 text-blue-700 hover:text-orange-500"
        :class="index % 2 ? 'bg-slate-200' : 'bg-neutral-100'"
      >
        {{ items.title }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
