<template>
  <div
    class="absolute w-full h-full mt-12 bg-black border level-info rounded-t-3xl"
  >
    <div class="mx-auto max-w-374">
      <div class="flex items-center mb-5 mt-9">
        <router-link :to="{ name: 'Dashboard' }">
          <img src="@/assets/img/arrow.png" class="w-5" />
        </router-link>
        <div class="flex justify-center flex-grow">
          <span class="text-4xl font-medium font-epil"> lvl info </span>
        </div>
      </div>
      <div class="relative">
        <img src="@/assets/img/data-bg.png" class="w-full" />
        <img src="@/assets/img/user.png" class="absolute w-24 top-7 left-8" />
        <span
          class="absolute flex text-2xl font-medium text-white right-18 font-epil top-6 min-w-28"
          >@obtainer</span
        >
        <span
          class="absolute flex text-2xl font-medium text-white right-18 font-epil bottom-8 min-w-28"
          >level #2</span
        >
      </div>
      <div class="mt-5 grid grid-cols-2 gap-1.5">
        <div class="relative">
          <img src="@/assets/img/cloud-btn.png" class="w-full" />
          <div class="absolute flex items-center gap-4 top-4 left-8">
            <img src="@/assets/img/nut1.png" class="h-5" />
            <span class="text-xl font-medium font-epil"> 20184 </span>
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/img/cloud-btn.png" class="w-full" />
          <div class="absolute flex items-center gap-4 top-4 left-8">
            <img src="@/assets/img/nut2.png" class="h-5" />
            <span class="text-xl font-medium font-epil"> 14 </span>
          </div>
        </div>
      </div>
      <div class="relative mt-8">
        <img src="@/assets/img/banner.png" class="w-full" />
        <div
          class="absolute left-0 flex items-center gap-2.5 w-full mx-4 pr-7 bottom-7"
        >
          <img src="@/assets/img/arrow.png" class="h-5" />
          <div
            class="relative flex items-center justify-between flex-grow text-lg font-medium font-epil"
          >
            <span> #1</span>
            <div class="relative z-10 w-9 h-9">
              <img src="@/assets/img/cur-level.png" class="w-full h-full" />
              <span class="absolute top-0 left-0 text-3xl font-medium font-epil"
                >#2</span
              >
            </div>
            <span>#3</span>
            <div
              class="absolute w-full h-0.5 bg-black bottom-2 z-1 left-0"
            ></div>
          </div>
          <img src="@/assets/img/arrow.png" class="h-5 rotate-180" />
        </div>
      </div>
      <div class="mt-5">
        <h2 class="text-4xl font-medium text-center font-epil">Об уровнях</h2>
        <div class="mt-4">
          <div class="relative">
            <img src="@/assets/img/banner.png" class="" />
            <div
              class="absolute left-0 flex items-center justify-between w-full px-4 font-medium transform -translate-y-1/2 font-epil top-1/2"
            >
              <span class="text-2xl"> lvl #2 </span>
              <div
                class="flex items-center gap-2 p-1.5 border border-black rounded-2xl my-4"
              >
                <img src="@/assets/img/check.png" class="w-6" />
                <p class="mb-0 max-w-25">Пригласите 3-х друзей</p>
              </div>
              <div class="flex flex-col gap-0 mr-8">
                <div class="flex items-center gap-0 text-2xl font-epil">
                  <span>X2 </span>
                  <img src="@/assets/img/nut1.png" class="h-6" />
                </div>
                <span class="text-xs "> к добыче </span>
              </div>
            </div>
          </div>
          <div class="relative mt-5">
            <img src="@/assets/img/banner.png" class="" />
            <div
              class="absolute left-0 flex items-center justify-between w-full px-4 font-medium transform -translate-y-1/2 font-epil top-1/2"
            >
              <span class="text-2xl"> lvl #3 </span>
              <div
                class="flex items-center gap-2 p-1.5 border border-black rounded-2xl my-4"
              >
                <img src="@/assets/img/lock.png" class="w-6" />
                <p class="mb-0 max-w-25">Пригласите 10 друзей</p>
              </div>
              <div class="flex flex-col gap-0 mr-8">
                <div class="flex items-center gap-0 text-2xl font-epil">
                  <span>X3 </span>
                  <img src="@/assets/img/nut1.png" class="h-6" />
                </div>
                <span class="text-xs "> к добыче </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.level-info {
  background-image: url("@/assets/img/level-info-fon.png"); /* Replace with your image URL */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
</style>
