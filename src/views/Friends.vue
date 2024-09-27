<template>
    <div class="h-calc">

        <div class="font-epil max-w-374 mx-auto flex flex-col justify-between min-h-max">
          <div class="px-4">
            <div class="flex items-center mt-8 flex-col gap-5">
              <img src="@/assets/img/task-big.png" class="h-50" />
              <div class="relative w-50">
                <img src="@/assets/img/banner-white.png" class="w-full" />
                <span
                  class="absolute text-2xl text-center font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full"
                  >Всего друзей: 54</span
                >
              </div>
            </div>
            <div class="grid w-full grid-cols-2 gap-3 mt-7">
              <div class="relative">
                <img src="@/assets/img/cloud-btn.png" class="w-full" />
                <span
                  class="absolute text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  >обычный</span
                >
              </div>
              <div class="relative">
                <img src="@/assets/img/cloud-btn-white.png" class="w-full" />
                <span
                  class="absolute text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  >премиум</span
                >
              </div>
            </div>
            <div class="relative mt-4">
              <img src="@/assets/img/banner.png" class="w-full h-auto" />
              <div
                class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-5"
              >
                <div class="flex h-full text-3xl font-medium items-center gap-3">
                  <img src="@/assets/img/user.png" class="h-13 self-end mb-3" />
                  <span> friend 1 </span>
                </div>
                <div class="flex items-center gap-2 text-2xl font-medium">
                  <img src="@/assets/img/nut1.png" class="h-5" />
                  <span> 1000 </span>
                </div>
              </div>
            </div>
            <div class="relative mt-3">
              <img src="@/assets/img/banner.png" class="w-full h-auto" />
              <div
                class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-5"
              >
                <div class="flex h-full text-3xl font-medium items-center gap-3">
                  <img src="@/assets/img/scrat.png" class="h-13 self-end mb-3" />
                  <span> friend 2 </span>
                </div>
                <div class="flex items-center gap-2 text-2xl font-medium">
                  <img src="@/assets/img/nut1.png" class="h-5" />
                  <span> 1000 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mb-5 mt-20">
            <img src="@/assets/img/banner-white.png" class="w-full h-auto" />
            <div
              class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-5"
            >
              <div class="flex h-full text-3xl font-medium items-center gap-3">
                <span> Пригласить Друга</span>
              </div>
              <div class="flex items-center gap-2 text-2xl font-medium">
                <img src="@/assets/img/e-link.png" class="h-6" />
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
