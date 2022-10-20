<script setup lang="ts">
const skills = await $fetch("/api/index/news");
const navitems = await $fetch("/api/index/newsNav");
</script>

<template>
  <div>
    <Content img-url="http://www.guanyu17.com/upfile/Banner/news.jpg">
      <template #list>
        <List title="新闻中心" :list-items="navitems"></List>
        <ContactUs></ContactUs>
      </template>
      <template #cardTitle> 新闻中心 </template>
      <template #cardContent>
        <template v-for="item in skills">
          <ItemLink :title="item.title" :id="item.id"></ItemLink><br />
        </template>
      </template>
    </Content>
  </div>
</template>

<style scoped></style>
