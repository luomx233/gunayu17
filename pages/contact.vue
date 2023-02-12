<script setup lang="ts"></script>

<template>
  <div>
    <Content img-url="/iamges/banner/contact.jpg">
      <template #list>
        <ContactUs></ContactUs>
      </template>
      <template #cardTitle> 联系方式 </template>
      <template #cardContent>
        <div class="text-xl text-gray-600 mt-2">
          全国统一服务热线： <span class="text-orange-500">4009 667 696</span>
        </div>
        <div class="text-2xl text-orange-500 mt-2 mb-2">
          河南冠宇仪器有限公司
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            地址：河南省郑州市新郑市薛店镇中德产业园39-3栋 <br />
            电话：0371-68186699（18530039666） <br />
            传真：0371-68186699 <br />
            网址：http://www.guanyu17.com <br />
            邮编：451100
          </div>
          <div class="col-span-1">
            <img src="/iamges/banner/20190524143135_61281.gif" alt="" />
          </div>
        </div>
      </template>
    </Content>
  </div>
</template>

<style scoped></style>
