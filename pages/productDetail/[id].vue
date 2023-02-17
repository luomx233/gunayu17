<script setup lang="ts">
const route = useRoute();
const recommend = await $fetch("/api/index/recommend");
let res = await $fetch("/api/index/getDetailByid", {
  params: { productId: route.params.id },
});
const productdetail = res;
const form = reactive({
  productName: "",
  userName: "",
  telNumber: "",
  phoneNumber: "",
  intro: "",
});
const postInfo = () => {
  window.alert(`
  订购物品:${form.productName}
  订购者:${form.userName} 
  电话号码:${form.telNumber} 
  手机号码:${form.phoneNumber} 
  额外说明:${form.intro} 
  `);
};
console.log(productdetail);
</script>
<template>
  <div>
    <Content img-url="/images/banner/shipinanquan.jpg">
      <template #list>
        <List title="推荐产品" :list-items="recommend"></List>
        <ContactUs></ContactUs>
      </template>
      <template #cardTitle> {{ productdetail.title }} </template>
      <template #cardContent>
        <div class="grid grid-cols-5 mt-4">
          <div class="col-span-3">
            <img :src="productdetail.imgurl" alt="" />
          </div>
          <div class="col-span-2 ml-6">
            <div class="text-lg text-blue-700">
              {{ productdetail.productInfo.name }}
            </div>
            <div>
              <span class="text-red-500">型号/规格：</span
              >{{ productdetail.productInfo.type }}
            </div>
            <div>
              <span class="text-red-500">生产厂家：</span
              >{{ productdetail.productInfo.producter }}
            </div>
            <div>
              <span class="text-red-500"> 产品用途：</span
              >{{ productdetail.productInfo.intro }}
            </div>
            <button class="mt-4 w-24 p-2 bg-sky-700 text-white text-center">
              在线订购
            </button>
          </div>
        </div>
        <div class="mt-4"></div>
        <ItemCard>
          <template #left>产品说明 </template>
          <template #content>
            <div class="mt-4" style="white-space: pre-line">
              <!-- {{ productdetail.productDetail.replaceAll('\n','<br />') }} -->
              {{ productdetail.productDetail }}
            </div>
          </template>
        </ItemCard>
        <div class="mt-4"></div>
        <ItemCard>
          <template #left>在线订购 </template>
          <template #content>
            <div class="postForm m-4">
              <div class="grid grid-cols-7">
                <div class="col-span-1">采购产品：</div>
                <div class="col-span-5">
                  <input
                    class="border"
                    type="text"
                    v-model="form.productName"
                  />
                </div>
              </div>
              <div class="grid grid-cols-7">
                <div class="col-span-1">联 系 人：</div>
                <div class="col-span-5">
                  <input class="border" type="text" v-model="form.userName" />
                </div>
              </div>
              <div class="grid grid-cols-7">
                <div class="col-span-1">电 话：</div>
                <div class="col-span-5">
                  <input class="border" type="text" v-model="form.telNumber" />
                </div>
              </div>
              <div class="grid grid-cols-7">
                <div class="col-span-1">手 机：</div>
                <div class="col-span-5">
                  <input
                    class="border"
                    type="text"
                    v-model="form.phoneNumber"
                  />
                </div>
              </div>
              <div class="grid grid-cols-7">
                <div class="col-span-1">订购说明：</div>
                <div class="col-span-5">
                  <input class="border" type="text" v-model="form.intro" />
                </div>
              </div>
              <div class="grid grid-cols-7">
                <div class="col-span-1"></div>
                <div class="col-span-5">
                  <button
                    @click="postInfo()"
                    class="hover:text-orange-500 w-24 p-2 bg-sky-700 text-white text-center"
                  >
                    在线订购
                  </button>
                </div>
              </div>
            </div>
          </template>
        </ItemCard>
      </template>
    </Content>
  </div>
</template>
<style scoped>
.postForm > .grid {
  margin-bottom: 10px;
}
</style>
