<script setup lang="ts">
import { ref } from "vue";
const slidebarInfos = await $fetch("/api/index/slidebar");
const currentIndex = ref(0);
const changeFn = () => {
  try {
    if (process.client) {
      if (!document.hidden) {
        if (currentIndex.value >= slidebarInfos.value.length - 1) {
          currentIndex.value = 0;
        } else {
          currentIndex.value += 1;
        }
      }
    }
  } catch (error) {}
};
let interval = setInterval(changeFn, 3000);
const changeSlide = (index: number) => {
  currentIndex.value = index;
  clearInterval(interval);
  setTimeout(() => {
    clearInterval(interval);
    interval = setInterval(changeFn, 3000);
  }, 2000);
};
</script>

<template>
  <div class="content relative">
    <NuxtLink to="/" v-for="(navinfo, index) in slidebarInfos" :key="index">
      <Transition name="pic" mode="out-in">
        <div
          class="w-full h-96 bg-cover"
          :style="{ backgroundImage: 'url(' + navinfo.imgUrl + ')' }"
          v-show="index == currentIndex"
        ></div>
      </Transition>
    </NuxtLink>
  </div>
  <div class="nav-button flex justify-center gap-4 mt-4">
    <div
      @click="changeSlide(index)"
      v-for="(navbutton, index) in slidebarInfos"
      :key="index"
      :class="{ 'current itemborder': currentIndex == index }"
      class="navitems"
    ></div>
  </div>
</template>

<style scoped>
.navitems {
  @apply box-border border p-1 transition-all duration-300 w-20 rounded-lg border-opacity-0 border-blue-500 bg-blue-500;
}
.current {
  @apply border-orange-500 bg-orange-500;
}

.itemborder,
.navitems:hover,
.current {
  cursor: pointer;
  --tw-border-opacity: 1;
}

.pic-enter-active {
  transition: all 1s ease;
}

.pic-enter-from,
.pic-leave-to {
  opacity: 0;
}

.pic-leave-active {
  position: fixed;
  display: none;
}
</style>
