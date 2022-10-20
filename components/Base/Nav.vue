<script setup lang="ts">
const { navitems } = defineProps(["navitems"]);
const { path } = useRoute();
const currentpath = ref(path);
const changePath = (path) => {
  currentpath.value = path;
};
</script>

<template>
  <div class="bg-blue-500 w-full text-white">
    <div class="navcontent flex justify-around text-center">
      <NuxtLink
        class="linkto"
        :class="{ current: currentpath == item.linkto }"
        @click="changePath(item.linkto)"
        v-for="item in navitems"
        :key="item.linkto"
        :to="item.linkto"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.navcontent {
  width: 80%;
  margin: auto;
}
.linkto {
  @apply p-3;
}
.current {
  @apply text-orange-500;
}
.linkto:hover {
  @apply cursor-pointer text-orange-500;
}
</style>
