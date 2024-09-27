<template>
  <div class="h-calc ">
    <div class="h-full">

      <div class="flex flex-col gap-10 mx-auto min-h-content !overflow-y-auto">
        <div>
          <div class="flex justify-center w-full mb-3 mt-8">
            <div class="relative w-174">
              <img src="@/assets/img/cloud-btn.png" class="w-full" />
              <span
                class="absolute text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 font-epil top-1/2 left-1/2"
              >
                Leaderboard
              </span>
            </div>
          </div>
          <div class="flex flex-col items-center max-xs:scale-90">
            <div class="flex flex-col w-full gap-2">
              <span class="text-2xl font-epil">Неделя:</span>
              <a-pagination
                :total="70"
                :page-size="10"
                v-model:current="currentPage"
              >
                <template #itemRender="{ type, originalElement }">
                  <a v-if="type === 'prev'" class=""
                    ><img src="@/assets/img/arrow.png" class=""
                  /></a>
                  <a v-else-if="type === 'next'"
                    ><img src="@/assets/img/arrow.png" class="w-5 rotate-180"
                  /></a>
                  <component
                    :is="originalElement"
                    v-else
                    class="pagination-btn"
                  ></component>
                </template>
              </a-pagination>
            </div>
            <div class="flex flex-col w-full gap-2 mt-5 font-epil">
              <span class="text-2xl font-epil">Рейтинг:</span>
              <div class="flex flex-col w-full gap-5">
                <div class="relative w-full max-h-19" v-for="i of 3" :key="i">
                  <img src="@/assets/img/banner.png" class="w-full" />
                  <div
                    class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-4"
                  >
                    <div class="flex gap-3">
                      <img class="h-13" src="@/assets/img/user.png" />
                      <div class="flex flex-col justify-between">
                        <span class="text-2xl font-medium">@user{{ i }}</span>
                        <div class="flex items-center gap-1 text-lg font-medium">
                          <img src="@/assets/img/nut1.png" class="h-5" />
                          <span> 20184</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 font-medium">
                      <img src="@/assets/img/trophy.png" class="w-6 h-6" />
                      <span class="text-3xl"> {{ i }} </span>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center mt-2">
                  <img src="@/assets/img/arrow.png" class="w-5 -rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-5 max-xs:scale-90">
          <div class="relative w-full max-h-19">
            <img src="@/assets/img/banner-white.png" class="w-full" />
            <div
              class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-4"
            >
              <div class="flex gap-3">
                <img class="h-13" src="@/assets/img/user.png" />
                <div class="flex flex-col justify-between">
                  <span class="text-2xl font-medium">@obtainer</span>
                  <div class="flex items-center gap-1 text-lg font-medium">
                    <img src="@/assets/img/nut1.png" class="h-5" />
                    <span> 20184</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-1 font-medium">
                <img src="@/assets/img/trophy.png" class="w-6 h-6" />
                <span class="text-3xl">10 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const currentPage = ref(0);
</script>
<style>

.pagination-btn {
  background-image: url("@/assets/img/cur-level.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.ant-pagination .ant-pagination-item {
  font-size: 28px;
  font-family: "Epilepsy";
  font-weight: 500;
}
.ant-pagination .ant-pagination-item-active .pagination-btn {
  background-image: url("@/assets/img/cur-page.png");
}
.ant-pagination .ant-pagination-item-active a,
.ant-pagination .ant-pagination-item-active:hover a {
  color: #000;
}
</style>
