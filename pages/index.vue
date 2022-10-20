<script setup>
const newsRecommend = await $fetch("/api/index/recommend");
const news = await $fetch("/api/index/news");
const skillsserve = await $fetch("/api/index/skillsserve");
const scrollbar = await $fetch("/api/index/scrollbar");
const recommendArticle = await $fetch("/api/index/recommendArticle");
</script>

<template>
  <div>
    <BaseSlideBar></BaseSlideBar>
    <div class="container mx-auto">
      <div class="mt-4 mb-4 content1 grid grid-cols-7">
        <div class="left col-span-2 mr-9">
          <div>
            <IndexPageLeft></IndexPageLeft>
          </div>
        </div>
        <div class="right col-span-5">
          <ItemCard>
            <template #left>
              <div class="text-white">新品推荐</div>
            </template>
            <template #content>
              <BaseScrollBar>
                <template v-for="item in scrollbar" :key="item.title">
                  <NuxtLink :to="item.linkto">
                    <div class="text-center m-2 hover:text-orange-500">
                      <img
                        :src="item.imgUrl"
                        alt=""
                        class="border p-1 border-gray-400"
                      />
                      <span>{{ item.title }}</span>
                    </div>
                  </NuxtLink>
                </template>
              </BaseScrollBar>
            </template>
          </ItemCard>
          <ItemCard>
            <template #left>
              <div class="text-white">热销产品</div>
            </template>
            <template #content>
              <div
                class="grid xl:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-3 text-gray-600 text-md"
              >
                <template v-for="item in newsRecommend" :key="item.id">
                  <ItemLink :id="item.id" :title="item.title"></ItemLink>
                </template>
              </div>
            </template>
          </ItemCard>
        </div>
      </div>
      <div class="content2 iamge1 mt-4 mb-4">
        <img
          src="http://www.guanyu17.com/image/index_img2.png"
          alt=""
          class="w-full mt-2 mb-2"
        />
      </div>
      <div
        class="content4 box-border border-4 border-neutral-300 p-4 grid grid-cols-2"
      >
        <div v-for="item in recommendArticle.mainArticle">
          <NuxtLink :to="item.linkto">
            <div class="grid grid-cols-2 gap-4">
              <div class="box-border border-2 border-neutral-300 p-1">
                <img :src="item.imgUrl" alt="" class="w-full h-60" />
              </div>
              <div class="p-2">
                <div class="text-sky-600">{{ item.title }}</div>
                <div class="hover:text-orange-500 text-gray-500">
                  {{ item.intro }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <template v-for="item in news" :key="item.title">
          <NuxtLink :to="item.linkto">
            <div
              class="hover:text-orange-500 grid grid-cols-4 border-b border-dashed p-1 text-gray-500 mr-4"
            >
              <span class="col-span-3">· {{ item.title }}</span>
              <span class="col-span-1 text-right">详情介绍>></span>
            </div>
          </NuxtLink>
        </template>
      </div>
      <div class="contentbase mt-4 mb-4">
        <div>
          <ItemCard>
            <template #left>
              <div class="text-white">公司新闻</div>
            </template>
            <template #content>
              <div class="grid grid-cols-2 text-gray-600 text-md">
                <template v-for="item in news" :key="item.id">
                  <ItemLink :id="item.id" :title="item.title"></ItemLink>
                </template>
              </div>
            </template>
            <template #right>
              <NuxtLink to="news" class="hover:text-orange-500"
                >>>更多</NuxtLink
              >
            </template>
          </ItemCard>
        </div>
        <div>
          <ItemCard>
            <template #left>
              <div class="text-white">技术服务</div>
            </template>
            <template #content>
              <div class="grid grid-cols-2 text-gray-600 text-md">
                <template v-for="item in skillsserve" :key="item.id">
                  <ItemLink :id="item.id" :title="item.title"></ItemLink>
                </template>
              </div>
            </template>
            <template #right>
              <NuxtLink to="news" class="hover:text-orange-500"
                >>>更多</NuxtLink
              >
            </template>
          </ItemCard>
        </div>
      </div>
      <div class="content3 image2 mt-4 mb-4">
        <img
          src="http://www.guanyu17.com/image/index_img1.png"
          alt=""
          class="w-full mt-2 mb-2"
        />
      </div>
      <div class="contentbase mt-4 mb-4">
        <div>
          <ItemCard>
            <template #left>
              <div class="text-white">公司新闻</div>
            </template>
            <template #content>
              <div class="grid grid-cols-2 text-gray-600 text-md">
                <template v-for="item in news" :key="item.id">
                  <ItemLink :id="item.id" :title="item.title"></ItemLink>
                </template>
              </div>
            </template>
            <template #right>
              <NuxtLink to="news" class="hover:text-orange-500"
                >>>更多</NuxtLink
              >
            </template>
          </ItemCard>
        </div>
        <div>
          <ItemCard>
            <template #left>
              <div class="text-white">技术服务</div>
            </template>
            <template #content>
              <div class="grid grid-cols-2 text-gray-600 text-md">
                <template v-for="item in skillsserve" :key="item.id">
                  <ItemLink :id="item.id" :title="item.title"></ItemLink>
                </template>
              </div>
            </template>
            <template #right>
              <NuxtLink to="news" class="hover:text-orange-500"
                >>>更多</NuxtLink
              >
            </template>
          </ItemCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentbase {
  @apply grid grid-cols-2 gap-10;
}
</style>
