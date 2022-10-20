<script setup lang="ts">
const productItems = await $fetch("/api/index/productslist");
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
    <!-- <li>
      <a href="products-list-zh-918.html">食品安全检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-919.html">农药残留检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-920.html">食品安全一体机</a>
    </li>
    <li>
      <a href="products-list-zh-921.html">金标读卡仪</a>
    </li>
    <li>
      <a href="products-list-zh-922.html">毛发毒品检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-923.html">真菌毒素检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-924.html">ATP荧光检测仪</a>
    </li>
    <li><a href="products-list-zh-925.html">药物残留检测仪</a></li>
    <li>
      <a href="products-list-zh-926.html">食用油品质检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-927.html">荧光检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-928.html">食品安全检测箱</a>
    </li>
    <li>
      <a href="products-list-zh-929.html">土壤养分肥料检测仪</a>
    </li>
    <li>
      <a href="products-list-zh-930.html">环境水质检测仪器</a>
    </li>
    <li>
      <a href="products-list-zh-931.html">实验室设备试剂耗材</a>
    </li> -->
  </div>
</template>

<style scoped></style>
