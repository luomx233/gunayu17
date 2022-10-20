<script setup lang="ts">
const listItems = defineProps(["listItems", "imgUrl"]);
</script>

<template>
  <div>
    <img :src="imgUrl" alt="" class="w-full h-60" />
    <div class="mt-10 container grid grid-cols-7 gap-8">
      <div class="col-span-2 bg-slate-100 text-zinc-500">
        <slot name="list"></slot>
      </div>
      <div class="col-span-5">
        <ItemCard>
          <template #left>
            <slot name="cardTitle"></slot>
          </template>
          <template #content>
            <slot name="cardContent"></slot>
          </template>
        </ItemCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
