<script setup lang="ts">
const { listItems, title } = defineProps(["listItems", "title"]);
</script>

<template>
  <div>
    <div class="text-xl text-white bg-blue-500 p-4">{{ title }}</div>
    <div v-if="listItems">
      <NuxtLink
        v-for="(items, index) in listItems"
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
  </div>
</template>

<style scoped></style>
