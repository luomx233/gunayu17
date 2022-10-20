<script setup lang="ts">
const route = useRoute();
let res = await $fetch("/api/index/productsInfo", {
  params: { productName: route.params.productName },
});
let productsInfo = reactive(res);
watchEffect(async () => {
  const res = await $fetch("/api/index/productsInfo", {
    params: { productName: route.params.productName },
  });
  productsInfo = reactive(res);
});
</script>

<template>
  <div class="">
    <Content img-url="http://www.guanyu17.com/upfile/Banner/shipinanquan.jpg">
      <template #list>
        <List
          :title="productsInfo.title"
          :list-items="productsInfo.listItems"
        ></List>
        <ContactUs></ContactUs>
      </template>
      <template #cardTitle> {{ productsInfo.title }} </template>
      <template #cardContent>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="item in productsInfo.products" class="col-span-1">
            <ItemLinkCard
              :title="item.title"
              :imgurl="item.imgurl"
              :id="item.id"
            ></ItemLinkCard
            ><br />
          </div>
        </div>
      </template>
    </Content>
  </div>
</template>

<style scoped></style>
