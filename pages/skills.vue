<script setup lang="ts">
const skills = await $fetch("/api/index/skillsserve");
const navitems = await $fetch("/api/index/skillsNav");
</script>

<template>
  <div>
    <Content img-url="/iamges/banner/service.jpg">
      <template #list>
        <List title="技术资料" :list-items="navitems"></List>
        <ContactUs></ContactUs>
      </template>
      <template #cardTitle> 技术资料 </template>
      <template #cardContent>
        <template v-for="item in skills">
          <ItemLink :title="item.title" :id="item.id"></ItemLink><br />
        </template>
      </template>
    </Content>
  </div>
</template>

<style scoped></style>
